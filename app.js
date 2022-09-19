const form = document.querySelector('#rating-form');
const ratingWindow = document.querySelector('.rating');
const ackWindow = document.querySelector('.ack');
const score = document.querySelector('#score');

form.addEventListener('submit',function(e){
    e.preventDefault();
    ratingWindow.classList.add('hidden');
    ackWindow.classList.add('show');
    score.innerText = document.querySelector('input[name="rating-value"]:checked').value + " ";
})