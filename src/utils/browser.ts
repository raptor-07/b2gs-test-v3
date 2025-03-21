export const isBrowser = () => typeof window !== 'undefined'

export const getDocument = () => {
  if (isBrowser()) {
    return document
  }
  return null
}

export const getWindow = () => {
  if (isBrowser()) {
    return window
  }
  return null
}
