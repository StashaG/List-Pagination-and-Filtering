/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
/***Global variables***/

const listItem = document.getElementsByClassName('student-item cf'); //This constant stores the list of students
const itemsPerPage = 10; //number of items to show on each page

console.log(listItem);
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => { //show the students on the page
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
const appendPageLinks = (list) => {
   const numOfPages = Math.ceil(listItem.length / itemsPerPage);
   const paginationDiv = document.createElement('div');  //create a div
   paginationDiv.className = 'pagination'; //give the div a pagination class
   paginationDiv.appendChild('.page'); //append the paginationDiv to .page div
   paginationDiv.appendChild('ul'); //add ul to the paginationDiv to store the paginationDiv
   
   for (let i = 0; i < numOfPages; i ++) { //loop for pagination links
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.appendChild('a');
      ul.appendChild('li');
      a.textContent = i;

      a.addEventListener('click', () => { //add an event listener to each a tag
      showPage(listItem, i); //call the showPage function to display the page
      
      
      });


      appendPageLinks(listItem);
      //console.log(numOfPages);
   }

   
    



   
}




// Remember to delete the comments that came with this file, and replace them with your own code comments.