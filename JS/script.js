var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 9000);
}
const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const searchTerm = input.value;
    searchTerm(google);
});
function search(term){
    alert('Performing search for term:', term);
    input.value = "";
}