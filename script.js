let container = document.querySelector('#container');

let setDimension = document.querySelector('.dimension');
let clear = document.querySelector('.clear');

let pixel, pixelRow;
let i, j;

function createGrid(dimension) {
    for (i = 0; i < dimension; i++) {
    
        let verticalDiv = document.createElement('div');
        verticalDiv.classList.add('vertical');
        
        let text = document.createElement('p');
        text.textContent = 'test'
        
        for (j = 0; j < dimension; j++) {
            let horizontalDiv = document.createElement('div');
            horizontalDiv.classList.add('horizontal');
            
            verticalDiv.appendChild(horizontalDiv);
        }
        container.appendChild(verticalDiv);
    }
}

function paintGrid() {
    pixel = document.querySelectorAll('.horizontal');
    pixelRow = document.querySelectorAll('.vertical');

    for (i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('mouseover', (event2) => {
            event2.target.style.backgroundColor = 'black';
        } )
    }
}

function deleteGrid() {
    for (i = 0; i < pixel.length; i++)
        pixel[i].remove();
    
    for (i = 0; i < pixelRow.length; i++) 
        pixelRow[i].remove();
}

function promptUser() {
    gridDimension = window.prompt('Please enter the number of squares per side:', '16');

    if (gridDimension == undefined)
        return;

    if (isNaN(gridDimension)) {
        alert('Invalid input');
        return;
    }

    gridDimension = parseInt(gridDimension);
    
    if (gridDimension > 100) {
        alert('Maximum dimension is 100');
        return;
    }
    if (gridDimension <= 0) {
        alert('Invalid dimension');
        return;
    }

    deleteGrid();
    createGrid(gridDimension);
    paintGrid();
}

createGrid(16);
paintGrid();

setDimension.addEventListener('click', promptUser);

// When clearing the grid, there's no need to remove the elements, hence the function deleteGrid() should not be used here
clear.addEventListener('click', () => {
    for (i = 0; i < pixel.length; i++)
        pixel[i].style.backgroundColor = 'white';
});