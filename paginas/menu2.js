
const fixed = document.querySelector('.fixed');

window.addEventListener('scroll', function(){
    fixed.classList.toggle('active', window.scrollY>0)
})