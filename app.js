const div = document.querySelector('.container');
const cat1 = document.getElementById('black-cat-static-1')
const cat2 = document.getElementById('black-cat-static-2')
const cat3 = document.getElementById('black-cat-static-3')
const blackCat = document.querySelector('.container .black-cat');
const cheer = document.getElementById("cheer"); 
const boo = document.getElementById("boo"); 


cat1.addEventListener('click', (e) => {

    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    e.preventDefault();

    catWalk(0, 60);
    setTimeout(function () {
        cat1.classList.remove('opacity');
        playBoo();
    }, 3750);


})

cat2.addEventListener('click', (e) => {

    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    e.preventDefault();

    catWalk(0, 155);
    setTimeout(function () {
        cat2.classList.remove('opacity');
        cat1.classList.remove('opacity');
    }, 9500);
})

cat3.addEventListener('click', (e) => {

    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    e.preventDefault();
    catWalk(0, 272);
    setTimeout(function () {
        cat3.classList.remove('opacity');
        cat2.classList.remove('opacity');
        cat1.classList.remove('opacity');
        playCheer();
    }, 16500);

})


function catWalk(start, end) {
    let elem = document.getElementById("cat");
   
    start = 0;
    let id = setInterval(frame, 60);

    function frame() {
        if (start == end) {
            clearInterval(id);
            elem.classList.add('hide')


        } else {
            start++;

            elem.style.left = start + 'px';

        }

    }
}

const playCheer = () =>{
    cheer.play();
}
const playBoo = () =>{
    boo.play();
}