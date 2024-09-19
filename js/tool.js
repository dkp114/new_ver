// var modal = document.getElementById("menuModal")
// var btn = document.getElementById("openModal")

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


const modal = document.querySelector('.grid_menu_modal');
const modalOpen = document.querySelector('.grid_menu_btn');
const modalOverlay = document.querySelector('.modal_overlay');
const modalClose = document.querySelector('.grid_menu_close');


modalOpen.addEventListener('click', function(){
    modal.classList.add('on');
    modalOverlay.classList.add('on');
    modalClose.style.display = "block";
    modalOpen.style.display = "none";
});

modalClose.addEventListener('click', function(){
    modal.classList.remove('on');
    modalOverlay.classList.remove('on');
    modalClose.style.display = "none";
    modalOpen.style.display = "block";
})

modalOverlay.addEventListener('click', function(){
    modal.classList.remove('on');
    modalOverlay.classList.remove('on');
    modalClose.style.display = "none";
    modalOpen.style.display = "block";
});

window.addEventListener('scroll', function(){
    modal.classList.remove('on');
    modalOverlay.classList.remove('on');
    modalClose.style.display = "none";
    modalOpen.style.display = "block";
});


