window.addEventListener('scroll', _.throttle(onScroll, 1000));

function onScroll() {
  console.log('💩');
}

document
  .querySelector('.input')
  .addEventListener('input', _.debounce(onInput, 1000));

function onInput() {
  console.log('input event! ' + Date.now());
}
