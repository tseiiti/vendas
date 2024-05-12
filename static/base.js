const qs = (arg) => {
  return document.querySelector(arg)
}
const qsa = (arg) => {
  return document.querySelectorAll(arg)
}
const to_din = (arg) => {
  return parseFloat(arg).toFixed(2).replace('.', ',')
}
const to_num = (arg) => {
  arg = arg.replace(',', '.')
  return parseFloat(arg)
}