const div = document.querySelector('.container');
const cat1 = document.getElementById('black-cat-static-1')
const cat2 = document.getElementById('black-cat-static-2')
const cat3 = document.getElementById('black-cat-static-3')
const blackCat = document.querySelector('.container .black-cat');
//const blackCatStatic = document.getElementById('black-cat-static');

cat1.addEventListener('click', () =>{
    // div.classList.toggle('background')
    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    catWalk();
})

cat2.addEventListener('click', () =>{
    // div.classList.toggle('background')
    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    catWalk2();
})

cat3.addEventListener('click', () =>{
    // div.classList.toggle('background')
    blackCat.classList.remove('hide');
    cat1.classList.add('opacity');
    cat2.classList.add('opacity');
    cat3.classList.add('opacity');
    catWalk3();
})


function catWalk() {
    let elem = document.getElementById("cat");
    let elem1 = document.getElementById("black-cat-static-1");
    // let elem2 = document.getElementById("black-cat-static-2");
    // let elem3 = document.getElementById("black-cat-static-3");
    let pos = 0;
    let id = setInterval(frame, 50);
    
    function frame() {
      if (pos == 10) {
        clearInterval(id);
        elem.classList.add('hide')
        elem1.classList.remove('opacity');
        
       
      } else {
        pos++; 
       
        elem.style.left = pos + 'px'; 
        
      }
     
    }
  }
  function catWalk2() {
    let elem = document.getElementById("cat");
    let elem1 = document.getElementById("black-cat-static-1");
    let elem2 = document.getElementById("black-cat-static-2");
    // let elem2 = document.getElementById("black-cat-static-2");
    // let elem3 = document.getElementById("black-cat-static-3");
    let pos = 0;
    let id = setInterval(frame, 50);
    
    function frame() {
      if (pos == 110) {
        clearInterval(id);
        elem.classList.add('hide')
        elem2.classList.remove('opacity');
        elem1.classList.remove('opacity');
        
       
      } else {
        pos++; 
       
        elem.style.left = pos + 'px'; 
        
      }
     
    }
  }

  function catWalk3() {
    let elem = document.getElementById("cat");
    let elem1 = document.getElementById("black-cat-static-1");
    let elem2 = document.getElementById("black-cat-static-2");
    let elem3 = document.getElementById("black-cat-static-3");
    // let elem2 = document.getElementById("black-cat-static-2");
    // let elem3 = document.getElementById("black-cat-static-3");
    let pos = 0;
    let id = setInterval(frame, 50);
    
    function frame() {
      if (pos == 210) {
        clearInterval(id);
        elem.classList.add('hide')
        elem3.classList.remove('opacity');
        elem2.classList.remove('opacity');
        elem1.classList.remove('opacity');
        
       
      } else {
        pos++; 
       
        elem.style.left = pos + 'px'; 
        
      }
     
    }
  }