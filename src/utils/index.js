
/**
 * 防抖
 */
 export function debounce(func, delay = 1000) {
  let timeout
  return function () {
      const _this = this
      const args = [...arguments]
      if (timeout) {
          clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
          func.apply(_this, args)
      }, delay)
  }
}