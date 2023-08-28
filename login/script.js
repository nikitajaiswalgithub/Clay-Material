const signUpBtn=document.querySelector('.signin-btn');
const signInBtn=document.querySelector('.signup-btn');
const formsWrapper=document.querySelector('.forms-wrapper');

signUpBtn.addEventListener("click",(e) => {
    e.preventDefault();
    console.log("Helooooooooooo 2222");
    formsWrapper.classList.remove("change");
});
signInBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formsWrapper.classList.add("change");
});


