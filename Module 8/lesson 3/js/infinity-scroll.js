const obs = document.querySelector('.obs');
const obsWrapper = document.querySelector('.obs__wrapper');
const lazyLoad = target => {
  const options = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('obsWrapper.style.height', obsWrapper.style.height)
        console.log('obsWrapper.style.height === ""', obsWrapper.style.height === '')
        console.log( obsWrapper.offsetHeight + 500 + 'px')
        console.log(!obsWrapper.style.height ? obsWrapper.offsetHeight + 500 + 'px':
        Number(obsWrapper.style.height.replace('px', '')) + 500 + 'px')
        obsWrapper.style.height = obsWrapper.style.height === '' ? (obsWrapper.offsetHeight + 500 + 'px'):
        Number(obsWrapper.style.height.replace('px', '')) + 500 + 'px';
        observer.disconnect();
        setTimeout(() => lazyLoad(obs), 3000);
      }
    })
  }, options)

  io.observe(target);
}

const images = document.querySelectorAll('.section img');

lazyLoad(obs);



// const lazyLoad = target => {
//   const options = {
//     rootMargin: '50px 0px',
//     threshold: 0.01
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         const imageUrl = img.dataset.lazy;

//         img.setAttribute('src', imageUrl);
//         img.classList.add('fade-in');

//         observer.disconnect();
//       }
//     });
//   }, options);

//   io.observe(target);
// };

// const images = document.querySelectorAll('.section img');

// images.forEach(image => {
//   lazyLoad(image);
// });

