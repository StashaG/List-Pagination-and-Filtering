/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

/***Global variables***/

const listItem = document.getElementsByClassName('student-item cf'); //This constant stores the list of students
const itemsPerPage = 10; //number of items to show on each page

console.log(listItem);

const showPage = (list, page) => { //showPage function to show the list of students on the page
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   for (let i = 0; i < list.length; i ++) { //loop over the list items
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block'; 
      }else{
         list[i].style.display = 'none';
      }
   }
}
(showPage(listItem, 1));

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (list) => { //appendPageLinks function to generate, append and create pagination buttons
   const numOfPages = Math.ceil(listItem.length / itemsPerPage);
   const paginationDiv = document.createElement('div');  //create a div
   paginationDiv.className = 'pagination'; //give the div a pagination class
   let pageDiv = document.querySelector('div.page') //select the .page div 
   pageDiv.appendChild(paginationDiv); //append the paginationDiv to .page div
   let ul = document.createElement('ul'); //add a ul element
   paginationDiv.appendChild(ul); //add ul to the paginationDiv to store the pagination links
   
   for (let i = 0; i < numOfPages; i ++) { //loop for pagination links
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.appendChild(a);
      ul.appendChild(li);
      a.href = '#'
      a.textContent = i + 1;

      a.addEventListener('click', (event) => { //add an event listener to each a tag
         let buttonLinks = document.getElementsByTagName('a'); //get button links by tagName
         for (let i =0; i < numOfPages; i++) {
            buttonLinks[i].classList.remove('active');
         }
         let e = event.target;
         e.classList.add('active');
         
      showPage(listItem, event.target.textContent); //call the showPage function to display the page
            
      });


      
      console.log(numOfPages);
   }

   
}

showPage(listItem, 1);
appendPageLinks(listItem);

