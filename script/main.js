document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        format: 'yyyy-mm-dd'
    });
  });

  // form - slider
document.querySelector('.read-rules').addEventListener('click', () => {
    document.querySelector('.form-slider').style.marginLeft ='-350px';
})
document.querySelectorAll('.back').forEach((elem) => {
    elem.addEventListener('click', function() {
        document.querySelector('.form-slider').style.marginLeft = '0';
    });
})

// Signup button
document.querySelector('#agree-rules').addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    } else {
        document.querySelector('#signup-submit').classList.add('disabled');
    }
})  
if (location.reload) {
    document.querySelector('#agree-rules').checked = false;
}