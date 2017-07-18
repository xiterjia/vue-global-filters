var evenNumbers = (value) => {
  if (!Array.isArray(value)) {
    return value
  }
  return value.filter(function (number) {
    return number % 2 === 0
  })
}
var capitalize = (value) => {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
export { evenNumbers, capitalize }