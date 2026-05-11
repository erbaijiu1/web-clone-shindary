import { joinURL } from 'ufo'

export function useSiteAssetUrl() {
  const config = useRuntimeConfig()

  return (value?: string | null) => {
    if (!value) {
      return ''
    }

    if (/^(?:[a-z]+:)?\/\//i.test(value) || value.startsWith('data:')) {
      return value
    }

    if (value.startsWith(config.app.baseURL)) {
      return value
    }

    if (value.startsWith('/')) {
      return joinURL(config.app.baseURL, value.slice(1))
    }

    return value
  }
}