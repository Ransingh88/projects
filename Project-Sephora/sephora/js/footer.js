const collapse = document.getElementsByClassName('item1');

for (i = 0; i < collapse.length; i++){
    collapse[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}