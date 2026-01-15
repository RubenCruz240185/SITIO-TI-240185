document.addEventListener('DOMContentLoaded', function(){
    var menuTitle = document.querySelector('.menu h1');
    var menuList = document.querySelector('.menu ul');
    if(menuTitle && menuList){
        menuTitle.style.cursor = 'pointer';
        menuTitle.addEventListener('click', function(){
            menuList.classList.toggle('open');
        });
    }
});