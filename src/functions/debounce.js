// default debounce time: 1000ms
export const debounce = (func, wait = 1000) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
};
// const sendData = () => console.log('send data')
// const debounceSendData = debounce(() => sendData());
//
// @onkeydown="debounceSendData"
