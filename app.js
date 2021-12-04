let cartImageBtn = document.querySelector('#cart-img');
let cartModal = document.querySelector('.cart-modal'); 

    cartImageBtn.addEventListener('click', function(){
        cartModal.classList.add('cart-modal-active');
        document.querySelector('#trash').addEventListener('click', function(){
            cartModal.classList.remove('cart-modal-active');
        })
    })


    function myCart(photo,date){
        return `This ${photo} photo  was taken on the year ${date}`;
    }
    

    let addToCartBtn = document.querySelector('.btn');
        addToCartBtn.addEventListener('click', function(){
            document.querySelector('.details').textContent =  myCart('happy family', 2022) ;
            document.querySelector('#sudlanan').src = tinyImages[3]
           

        })



let xxx = document.querySelector('#xxx')
let menu = document.querySelector('#menu');
        menu.addEventListener('click', function(){
            const navUL = document.querySelector('.nav-ul');
            navUL.classList.add('nav-activate'); 
            menu.style.display = "none";
            xxx.style = "display:block; margin-right:1rem;"
            
        })
        xxx.addEventListener('click', function(){
            const navUL = document.querySelector('.nav-ul');
            navUL.classList.remove('nav-activate'); 
            menu.style.display = "block";
            xxx.style.display = "none";
            
        })





let small = document.querySelectorAll('.small');
let displayImage = document.querySelector('#item');
for (let index = 0; index < small.length; index++) {
    small[index].addEventListener('click', function (){
        displayImage.src = small[index].src;
    })
    
}
    
let tinyImages = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]; 


let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let currentPic = 1;
next.addEventListener('click', function(){
    displayImage.src = tinyImages[currentPic];
    currentPic++;
    if (currentPic > tinyImages.length -1) {
        currentPic = 0;        
    }
})
prev.addEventListener('click', function(){
    displayImage.src = tinyImages[currentPic];
    currentPic--;

    if (currentPic < 0) {
        currentPic = tinyImages.length -1
    }
})





