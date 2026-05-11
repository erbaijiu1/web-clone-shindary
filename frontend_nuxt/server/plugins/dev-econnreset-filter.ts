function isConnResetError(error: unknown) {
  if (!(error instanceof Error)) {
    return false
  }

  const nodeError = error as NodeJS.ErrnoException

  return nodeError.code === 'ECONNRESET' || error.message.includes('ECONNRESET')
}

function wrapProcessListeners(eventName: 'unhandledRejection' | 'uncaughtException') {
  const listeners = process.listeners(eventName)

  if (listeners.length === 0) {
    return
  }

  for (const listener of listeners) {
    process.removeListener(eventName, listener)
  }

  process.on(eventName, (...args) => {
    const [error] = args

    if (isConnResetError(error)) {
      return
    }

    for (const listener of listeners) {
      listener(...args)
    }
  })
}

export default defineNitroPlugin((nitroApp) => {
  if (!import.meta.dev) {
    return
  }

  if ((globalThis as typeof globalThis & { __shindaryConnResetFilterInstalled__?: boolean }).__shindaryConnResetFilterInstalled__) {
    return
  }

  ;(globalThis as typeof globalThis & { __shindaryConnResetFilterInstalled__?: boolean }).__shindaryConnResetFilterInstalled__ = true

  const originalCaptureError = nitroApp.captureError.bind(nitroApp)

  nitroApp.captureError = (error, context) => {
    if (isConnResetError(error)) {
      return
    }

    originalCaptureError(error, context)
  }

  wrapProcessListeners('unhandledRejection')
  wrapProcessListeners('uncaughtException')
})