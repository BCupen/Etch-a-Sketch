let color='black';

function changeColor(choice){
    color = choice;
}

function createGrid(size){
    const board = document.querySelector('.board');
    const squares =  board.querySelectorAll('div');
    squares.forEach(square => square.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.classList.add('cell');
        square.style.backgroundColor = 'white';
        board.appendChild(square);
    }
}

function colorSquare(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
    }else{
      this.style.backgroundColor = color;  
    }
    
}

createGrid(16);