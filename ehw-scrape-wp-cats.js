/*
Purpose: Grab category list from WordPress category page
Creator: Eric Hepperle
Date Created: 07/10/18
Date Edited: 02/14/19

Usage:
- Open a WordPress blog post
- Paste the code below into browser console and hit enter

Sample Output:
    Industry News
    Meetings
    Newsletters
    Press Releases
    Regional News

*/

console.clear();

var results = document.querySelectorAll('.wp-list-table a.row-title');

Array.from(results).forEach(function(title, i) {

    console.log(title.innerText);

});
