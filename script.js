let container = document.querySelector('#container');

let setDimension = document.querySelector('.dimension');
let clear = document.querySelector('.clear');

let standardMode = document.querySelector('.standard');
standardMode.classList.toggle('standard-active');
let rainbowMode = document.querySelector('.rainbow');

let pixel, pixelRow;
let toggleRainbowMode = false;
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

function getRandomColor() {
    let hexValues = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

function paintGrid(toggleRainbowMode) {
    pixel = document.querySelectorAll('.horizontal');
    pixelRow = document.querySelectorAll('.vertical');

    for (i = 0; i < pixel.length; i++) {
        
        pixel[i].addEventListener('mouseover', (ev) => {
            
            if (toggleRainbowMode == false)
                ev.target.style.backgroundColor = 'black';
            else 
                ev.target.style.backgroundColor = getRandomColor();
        })
    }
    
}

function clearGrid() {
for (i = 0; i < pixel.length; i++)
    pixel[i].style.backgroundColor = 'white';
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
    paintGrid(toggleRainbowMode);
}

createGrid(16);
paintGrid(toggleRainbowMode);

setDimension.addEventListener('click', promptUser);

// When clearing the grid, there's no need to remove the elements, hence the function deleteGrid() should not be used here
clear.addEventListener('click', clearGrid);

standardMode.addEventListener('click', () => {
    
    if (toggleRainbowMode == false)
        return;

    standardMode.classList.toggle('standard-active');
    rainbowMode.classList.toggle('rainbow-active');

    toggleRainbowMode = false;
    clearGrid();
    paintGrid(toggleRainbowMode);
})

rainbowMode.addEventListener('click', () => {
    
    if (toggleRainbowMode == true)
        return;

    rainbowMode.classList.toggle('rainbow-active');
    standardMode.classList.toggle('standard-active');
    
    toggleRainbowMode = true;
    clearGrid();
    paintGrid(toggleRainbowMode);
})