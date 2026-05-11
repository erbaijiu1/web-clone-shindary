import os
import re
import shutil
from pathlib import Path

# 设置基础目录
BASE_DIR = Path('/Users/hc/Desktop/code/toP/webClone/shindary_site/www.shindary.com')
SEED_DATA_DIR = BASE_DIR / 'web_transfer/backend_dev/app/data'
EXPORT_DIR = BASE_DIR / 'web_transfer/export_static'

if EXPORT_DIR.exists():
    shutil.rmtree(EXPORT_DIR)
EXPORT_DIR.mkdir(parents=True)

# 匹配我们在 seed 文件中新改的路径
pattern = re.compile(r'"/shindary_static/(data|migrated)/([^"]+)"')

used_files = set()

for filepath in SEED_DATA_DIR.glob('*.py'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = pattern.findall(content)
        for prefix, rel_path in matches:
            # 过滤掉显然不是文件的链接（没有后缀名的）
            if '.' in rel_path.split('/')[-1]:
                used_files.add((prefix, rel_path))

copied_count = 0
missing_files = []

print(f"Starting to extract {len(used_files)} used images...")

for prefix, rel_path in used_files:
    if prefix == 'data':
        src_path = BASE_DIR / 'data' / rel_path
    elif prefix == 'migrated':
        src_path = BASE_DIR / 'web_transfer' / 'frontend_nuxt' / 'public' / 'migrated' / rel_path
    
    dest_path = EXPORT_DIR / prefix / rel_path

    if src_path.exists() and src_path.is_file():
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_path, dest_path)
        copied_count += 1
    else:
        missing_files.append(str(src_path))

print(f"Successfully extracted: {copied_count} images to {EXPORT_DIR}")
if missing_files:
    print(f"Failed to find {len(missing_files)} images (they might not have been downloaded by HTTrack).")
