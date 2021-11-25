let cartImageBtn = document.querySelector('#cart-img');
let cartModal = document.querySelector('.cart-modal'); 

    cartImageBtn.addEventListener('click', function(){
        // let cartModalBg = document.querySelector('.cart-modal-bg');
        cartModal.classList.add('cart-modal-active');
        
    })
     
const menu = document.querySelector('#menu');
        menu.addEventListener('click', function(){
            const navUL = document.querySelector('.nav-ul');
            navUL.style.transition = '1s';
            navUL.classList.add('nav-activate');

            
            const closedNav = document.querySelector('.closed-nav')
                closedNav.addEventListener('click', function(){
                navUL.classList.remove('nav-activate');
                })
        })









let small = document.querySelectorAll('.small');
let displayImage = document.querySelector('#item');
for (let index = 0; index < small.length; index++) {
    small[index].addEventListener('click', function (){
        displayImage.src = small[index].src;
    })
    
}
    
    