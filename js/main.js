const elBody = document.querySelector ('body');
const elBtn = document.querySelector ('.dark-mode');
console.log(elBody , elBtn)
elBtn.addEventListener('click', function() {
  elBody.classList.toggle('dark');
});
