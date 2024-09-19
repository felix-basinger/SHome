const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
const images2 = document.querySelectorAll('.slider-img-2');
const controlls2 = document.querySelectorAll('.controlls-2');
const images3 = document.querySelectorAll('.slider-img-3');
const controlls3 = document.querySelectorAll('.controlls-3');
const images4 = document.querySelectorAll('.slider-img-4');
const controlls4 = document.querySelectorAll('.controlls-4');
const images5 = document.querySelectorAll('.slider-img-5');
const controlls5 = document.querySelectorAll('.controlls-5');
const images6 = document.querySelectorAll('.slider-img-6');
const controlls6 = document.querySelectorAll('.controlls-6');
let imageIndex = 0;
let imageIndex2 = 0;
let imageIndex3 = 0;
let imageIndex4 = 0;
let imageIndex5 = 0;
let imageIndex6 = 0;


function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next'))
        {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }

            show(index);
        }
    })
})

function show2(index) {
    images2[imageIndex2].classList.remove('active');
    images2[index].classList.add('active');
    imageIndex2 = index;
}

controlls2.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-2')) {
            let index = imageIndex2 - 1;

            if (index < 0) {
                index = images2.length - 1;
            }

            show2(index);
        } else if (event.target.classList.contains('next-2'))
        {
            let index = imageIndex2 + 1;
            if (index >= images2.length) {
                index = 0;
            }

            show2(index);
        }
    })
})

function show3(index) {
    images3[imageIndex3].classList.remove('active');
    images3[index].classList.add('active');
    imageIndex3 = index;
}

controlls3.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-3')) {
            let index = imageIndex3 - 1;

            if (index < 0) {
                index = images3.length - 1;
            }

            show3(index);
        } else if (event.target.classList.contains('next-3'))
        {
            let index = imageIndex3 + 1;
            if (index >= images3.length) {
                index = 0;
            }

            show3(index);
        }
    })
})




function show4(index) {
    images4[imageIndex4].classList.remove('active');
    images4[index].classList.add('active');
    imageIndex4 = index;
}

controlls4.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-4')) {
            let index = imageIndex4 - 1;

            if (index < 0) {
                index = images4.length - 1;
            }

            show4(index);
        } else if (event.target.classList.contains('next-4'))
        {
            let index = imageIndex4 + 1;
            if (index >= images4.length) {
                index = 0;
            }

            show4(index);
        }
    })
})


function show5(index) {
    images5[imageIndex4].classList.remove('active');
    images5[index].classList.add('active');
    imageIndex5 = index;
}

controlls5.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-5')) {
            let index = imageIndex5 - 1;

            if (index < 0) {
                index = images5.length - 1;
            }

            show5(index);
        } else if (event.target.classList.contains('next-5'))
        {
            let index = imageIndex5 + 1;
            if (index >= images5.length) {
                index = 0;
            }

            show5(index);
        }
    })
})


function show6(index) {
    images6[imageIndex6].classList.remove('active');
    images6[index].classList.add('active');
    imageIndex6 = index;
}

controlls6.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev-6')) {
            let index = imageIndex6 - 1;

            if (index < 0) {
                index = images6.length - 1;
            }

            show6(index);
        } else if (event.target.classList.contains('next-6'))
        {
            let index = imageIndex6 + 1;
            if (index >= images6.length) {
                index = 0;
            }

            show6(index);
        }
    })
})

show(imageIndex);
show2(imageIndex2);
show3(imageIndex3);
show4(imageIndex4);
show5(imageIndex5);
show6(imageIndex6);

// const nav = document.querySelector('#nav');
// const navBtn = document.querySelector('#nav-btn');
// const navBtnImg = document.querySelector('#nav-btn-img');

// navBtn.onclick = () => {
//     if (nav.classList.toggle)
