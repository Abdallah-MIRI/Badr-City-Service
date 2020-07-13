/*
 ** Version: 1.0.0
 ** File: Main js
 */

/*
 * Max Word Featured Articles
 */
/*
const maxWord = document.querySelectorAll('.max-word');

let wordCount = maxWord.length;

console.log(wordCount)

maxWord.forEach((word) => {
  
  console.log(word.textContent.length)
  
  const wordArray = Array.from(word.textContent);
  
  if (word.textContent.length >= 10) {
    console.log(true)
    wordArray.length = 9;
  }
  console.log(wordArray.length)
})
*/

/*
 * Advertisement Alert 
 */
const adsFixed = document.getElementById('ads-fixed');
const btnClose = document.getElementById('btn-close');

window.onload = adsFixed.classList.remove('d-none');

btnClose.addEventListener('click', () => {
  adsFixed.classList.add('d-none');
});