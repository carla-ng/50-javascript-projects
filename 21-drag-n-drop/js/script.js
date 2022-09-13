
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for ( const empty of empties ) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// Start of dragging action
function dragStart() {
    this.className += ' hold'

    setTimeout( () => this.className = 'invisible', 0)
}

// End of dragging action
function dragEnd() {
    this.className = 'fill'
    
}

// Action of dragging over an element
function dragOver(e) {
    e.preventDefault()
}

// Action of dragging inside an element
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

// Action of dragging outside an element
function dragLeave() {
    this.className = 'empty'
}

// Action of dropping dragged element
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}