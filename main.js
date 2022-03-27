//节流
const throttle = (fn, time) => {
  let timer = null
  return (...args) => {
    if (timer) return
    fn.call(undefined, ...args)
    timer = setTimeout(() => {
      timer = null
    }, time)
  }
}

//防抖
const debounce = (fn, time) => {
  let timer = null
  return (...args) => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(undefined, ...args)
      timer = null
    }, time)
  }
}
