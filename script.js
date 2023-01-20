var k = 80;
const board = document.querySelector('.board');

// for creating the rows
for(i=0;i<k;i++){
    board.innerHTML+= '<div class="row"></div>';
}
row = board.querySelectorAll('.row');

//adding boxes inside the rows
row.forEach(element => {
    for(i=0;i<k;i++){
        element.innerHTML+= '<div class="box"></div>';
    }
});

box = document.querySelectorAll('.box');
board.addEventListener('mousedown',()=>{
    box.forEach(element => {
    element.addEventListener('mouseover', ()=>{
        element.style['background-color'] = 'blue';
    }) 
});
})


