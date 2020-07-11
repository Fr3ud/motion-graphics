const panel = document.querySelector('.panel');
const panelLeft = document.querySelector('.panel__left');
const resizeBar = document.querySelector('.resize-bar');

let isResizing = false;

const activeResizeBar = () => {
    isResizing = true;
}

const resizePanel = e => {
    if (!isResizing) return;
    
    panelLeft.style.width = `${e.clientX - 14}px`;
}

const stopResizing = () => {
    isResizing = false;
}

resizeBar.addEventListener('mousedown', activeResizeBar);
document.addEventListener('mousemove', resizePanel);
document.addEventListener('mouseup', stopResizing);