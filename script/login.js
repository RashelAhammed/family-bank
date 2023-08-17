
// step:1-->add event hendler
document.getElementById('submit-button').addEventListener('click',function() {
  // step:2-->get email input value 
  const userEmail =document.getElementById('emailField');
  const email = userEmail.value;
  // step:3-->get pass input value 
  const userPassword = document.getElementById('passwordField');
  const password = userPassword.value;
  // console.log(email,password);
  // step:4--> cheacking validation
  if (email ==='dad@mom.com' && password ==='rasel') {
    window.location.href= 'bank.html';
  } else {
    alert('your are invalid member');
  }
})