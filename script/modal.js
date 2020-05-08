
// Modal
document.querySelectorAll('.modal-show').forEach((elem) => {
    elem.addEventListener('click', showModal);
});

document.querySelectorAll('.modal-project-close').forEach((elem) => {
    elem.addEventListener('click', hideModal);
});

document.querySelectorAll('.modal-wrap').forEach((elem) => {
    elem.addEventListener('click', hideModal);
});

document.querySelectorAll('.modal-project').forEach((elem) => {
    elem.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

function showModal() {
    let att = this.getAttribute('data-modal');
    document.querySelector(att).classList.remove('hide');

    document.onkeydown = escape;
    function escape(event) {
        if (event.keyCode == 27) {
            hideModal();
        }
    }
}

function hideModal() {
    document.querySelectorAll('.modal-wrap').forEach((elem) => {
        elem.classList.add('hide');
    })
    document.onkeydown = null;   
}
