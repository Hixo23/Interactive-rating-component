const buttons = document.querySelectorAll('.rates');
let selectedNumber = 0;

const resetElement = () => {
    const activeElement = document.querySelector('.selected');
    activeElement ? activeElement.classList.remove('selected') : '';
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(event.target.nodeName == "DIV") return;
        resetElement();
        event.target.classList.add('selected');
        selectedNumber = event.target.textContent;
    })
})

const changeSelectedContent = () => {
    document.querySelector('.selected_paragraph').textContent = `You selected ${selectedNumber} out of 5`
}

document.querySelector('.btn').addEventListener('click', (event) => {
    changeSelectedContent();
    document.querySelector('.component').classList.add('hidden');
    document.querySelector('.ty__state').classList.remove('hidden')
})