// const productAmount = () => {
//   const amount = document.querySelector('.product-content__number'),
//     input = document.querySelector('.product-content__num'),
//     submit = document.querySelector('.product-content__submit'),
//     plus = document.querySelector('._plus'),
//     minus = document.querySelector('._minus');

//   if (amount) {
//     const minusPlusElem = (plus) => {
//       if (!plus && input.value > 1) input.value = +input.value - 1;
//       if (plus) input.value = +input.value + 1;
//     };

//     const addBasket = () => {

//     };

//     amount.addEventListener('click', (event) => {
//       if (event.target === plus) {
//         minusPlusElem(true);
//       } else if (event.target === minus) {
//         minusPlusElem(false);
//       } else if (event.target === submit) {
//         addBasket(event.target);
//       }
//     });
//   }
// };

// export default productAmount;