//Selecting the elements in the DOM:
var taskInput = document.getElementById("new-task");//New-task
var addButton=  document.getElementsByTagName("button")[0];//the first button of the page
var inCompleteTasksHolder= document.getElementById("incomplete-tasks"); //with the id of incomplete-Tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //with the id of Completed-tasks
//Add a New tasks
var addTask=function(){
	console.log("add tasks...")
	//When the button is pressed
	//create a new list item with the text from te #new-task
	//input (Checkbox)
	//label
	//input(Text)
	//button.edit
	//button.delete
	//each input should be modififed and appended
						}

//edit an existing task
var editTask=function(){
	console.log("add tasks...")

	//when the edit button is pressed
	// if the class of the parent is .editmode:
		//switch from .editMode 
		//label text become the input's value
	//else
		//switch to editMode 
		//input Value becomes thhe label's text
	//toggle .editMode	
}

var deleteTask= function(){
	console.log("delete tasks...")

//Delete an existing task
	//When the delte button is pressed:
	//Remove the parent list item from the unordered list

}

var taskCompleted=function(){
	console.log("completed tasks...")
	//Mark a task as complete
	//when the checkbox is checked
		//append the task list item to #completed-tasks 
}

var taskIncompleted=function(){
	console.log("incomplete tasks...")
//Mark a task as incomplete
	//when the check box is unchecked:
		//append to #incomplete-tasks
}

//setting the click handler to the add task function
addButton.onclick = addTask;
