const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    alert(1) // for testing pls do not remove -Addi
    wrapper.classList.add('active');
})


loginLink.addEventListener('click', ()=> {
    alert(2)
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    alert(3)
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    alert(4)
    wrapper.classList.remove('active-popup');
})

