let container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    
    let verticalDiv = document.createElement('div');
    verticalDiv.classList.add('vertical');
    
    let text = document.createElement('p');
    text.textContent = 'test'
    
    for (let j = 0; j < 16; j++) {
        let horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('horizontal');
        
        let text = document.createElement('p');
        text.textContent = 'test'
        horizontalDiv.appendChild(text);
        
        verticalDiv.appendChild(horizontalDiv);
    }
    container.appendChild(verticalDiv);
}
