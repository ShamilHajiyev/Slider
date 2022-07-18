let image = document.querySelector('#image');
let radio1 = document.querySelector('#a');
let radio2 = document.querySelector('#b');
let radio3 = document.querySelector('#c');

radio1.addEventListener('input', function(){
    if(radio1.checked){
        image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-random-energy-wave-background-image_307670.jpg')
    }
})

radio2.addEventListener('input', function(){
    if(radio2.checked){
        image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-black-hole-energy-backgroundjavascript-image_307668.jpg')
    }
})

radio3.addEventListener('input', function(){
    if(radio3.checked){
        image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-black-hole-energy-blast-background-image_307667.jpg')
    }
})