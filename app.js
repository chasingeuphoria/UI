const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

document.getElementById('submit').addEventListener("click", function(){
  alert(`Thank you ${name.value}, for submitting your ${subject.value}, we will get back to you as soon as we can!`)
});
