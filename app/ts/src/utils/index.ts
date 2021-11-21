export const getCsrfToken = () => {
  const csrfToken = document.querySelector(
    'meta[name="csrf-token"]'
  ) as HTMLMetaElement

  return csrfToken.content || ''
}
