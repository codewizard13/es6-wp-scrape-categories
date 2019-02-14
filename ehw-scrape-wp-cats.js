/*
Grab category list from WordPress category page
Eric Hepperle
07/10/18
*/

console.clear();

var results = document.querySelectorAll('.wp-list-table a.row-title');

Array.from(results).forEach(function(title, i) {

    console.log(title.innerText);

});
