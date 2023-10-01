export const convertCurrentTime = (number: number) => {
  const minutes = Math.floor(number / 60)
  const seconds = Math.ceil(number % 60)
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
