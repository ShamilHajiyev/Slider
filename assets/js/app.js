let image = document.querySelector('#image');
let radio1 = document.querySelector('#a');
let radio2 = document.querySelector('#b');
let radio3 = document.querySelector('#c');

let count = 1;

radio1.addEventListener('input', function () {
    if (radio1.checked) {
        ChangeImg(1);
        count = 1;
    }
})

radio2.addEventListener('input', function () {
    if (radio2.checked) {
        ChangeImg(2);
        count = 2;
    }
})

radio3.addEventListener('input', function () {
    if (radio3.checked) {
        ChangeImg(3);
        count = 3;
    }
})

function ChangeImg(count) {
    switch (count) {
        case 1:
            image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-random-energy-wave-background-image_307670.jpg');
            radio1.click();
            break;
        case 2:
            image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-black-hole-energy-backgroundjavascript-image_307668.jpg')
            radio2.click();
            break;
        case 3:
            image.setAttribute('src', 'https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-black-hole-energy-blast-background-image_307667.jpg')
            radio3.click();
            break;
        default:
            break;
    }
}

let leftbtn = document.querySelector('#left');
let rightbtn = document.querySelector('#right');

leftbtn.addEventListener('click', function () {
    if (count > 1) {
        count--;
    }
    else {
        count = 3;
    }
    ChangeImg(count)
})

rightbtn.addEventListener('click', function () {
    if (count < 3) {
        count++;
    }
    else {
        count = 1;
    }
    ChangeImg(count)
})