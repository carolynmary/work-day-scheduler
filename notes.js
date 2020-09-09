WK 4 HOMEWORK
// <!-- FROM HARRISON -->
// for the timer part of the homework -->
// <!-- timer.textContent = 60;
//     var myInterval = setInterval(function(){
//     timer.textContent -= 1;
//     time = timer.textContent;
//     if (time <= 0){
//         alert("Game Over");
//         clearInterval(myInterval);
//     }
//     }, 1000);
// (edited)


// <!-- SEE ALSO RON'S SCREENSHOTS -->

// RONS FROM SLACK 

Aug 19 activities
// target button by ids
// get a reference to the result element
// add eventListener to decrement btn tach decrement function
// add eventListener to increment btn add tach increment function
// inc / dec 
   // incement result
   // change result elemnt text

   // get a ref to input
// add click event to btn to call calculateTip
// calculateTip
   // get input
   // calculate tip
   // display on screen (edited) 

//    var carousel = document.querySelector(".carouselbox");
// var next = carousel.querySelector(".next");
// var prev = carousel.querySelector(".prev");
// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
// var index = 0;
// var images = [
//   "https://picsum.photos/300/200",
//   "https://picsum.photos/300/201",
//   "https://picsum.photos/300/202",
//   "https://picsum.photos/300/203"
// ];
// var currentImage;



// MAYBE WK 5 HOMEWORK??  LOOK INTO THIS................................
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
renderTodos();
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = document.createElement("li");
    li.textContent = todo;
    // add data-index attribute to li element (i)
    // create a button
    // add text content to button
    // append button to li element
    todoList.appendChild(li);
  }
}
function callSubmit(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }
  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";
  // Re-render the list
  renderTodos();
}
// When form is submitted...
todoForm.addEventListener("submit", callSubmit);
// add click event to todolist 
  // find the parent data-index
  // remove element from array