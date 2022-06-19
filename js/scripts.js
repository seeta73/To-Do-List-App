function newItem(){
 
/* 1.1 JS add new item
let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);
 */  
	
  let list = $('#list')
  let li = $('<li></li>');
  list.append(li);
  let inputValue = $('#input').val();
  li.append(inputValue);
  
	
 /* 1.2 JS add new item
 
   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }
 */
	
	
 if (inputValue === '') {
   alert ("You must write something!"); 
 } else {
    $('#list').append(li);
 }
	
	
 /*
 2.  Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}
li.addEventListener("dblclick",crossOut);
 */
  
	
 function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
  
	
  /*
  3.1  Adding the delete button "X": 
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

crossOutButton.addEventListener("click", deleteListItem);
  */
  
	
  let crossOutButton =$('<crossOutButton></crossOutButton>');  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
 
	
  /*
 3.2 JS Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
  */

	
 function deleteListItem(){
     li.addClass("delete")
}
 
	
/* 4 JS Reordering the items: 
   $('#list').sortable();
*/
  
	
$('#list').sortable();
}

