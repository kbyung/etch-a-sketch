const grid = document.querySelector('.grid')


function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div')
        grid.appendChild(row)

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

createGrid(16)



