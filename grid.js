const newGrid = document.querySelector('.newGrid')
const grid = document.querySelector('.grid')

function createGrid(size) {
    
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div')
        

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = `${960/size}px`
            cell.style.width = `${960/size}px`
            row.appendChild(cell);

            cell.addEventListener("mouseover", function() {
                cell.style.backgroundColor = 'black'
            })
        }
        grid.appendChild(row)
    }
}

function removeAllChidNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

newGrid.addEventListener("click", function() {
    let input = prompt("Enter the number of squares per side")
    removeAllChidNodes(grid)
    createGrid(input);
})



createGrid(16)



