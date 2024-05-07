let container = document.querySelector('#container');

let gridDimension = 16;

for (let i = 0; i < gridDimension; i++) {
    
    let verticalDiv = document.createElement('div');
    verticalDiv.classList.add('vertical');
    
    let text = document.createElement('p');
    text.textContent = 'test'
    
    for (let j = 0; j < gridDimension; j++) {
        let horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('horizontal');
        
        verticalDiv.appendChild(horizontalDiv);
    }
    container.appendChild(verticalDiv);
}

let pixel = document.querySelectorAll('.horizontal')

for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('mouseover', (event2) => {
        event2.target.style.backgroundColor = 'black';
    } )
}