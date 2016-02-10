//Selecting the elements in the DOM:
var taskInput = document.getElementById("new-task");//New-task
var addButton=  document.getElementsByTagName("button")[0];//the first button of the page
var inCompleteTasksHolder= document.getElementById("incomplete-tasks"); //with the id of incomplete-Tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //with the id of Completed-tasks
//Create a new task

var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");	//create list Item
	var checkbox=document.createElement("input");	//input (Checkbox)
	var label=document.createElement("label"); //label
	var editInput=document.createElement("input");//text for edit input
	var editButton = document.createElement("button");//edit button 
	var deleteButton = document.createElement("button");//delete button
//changing types:
checkbox.type="checkbox";
editInput.type="text";
editButton.innerText="Edit";
editButton.className="edit"
deleteButton.innerText="Delete";
deleteButton.className="delete";

label.innerText=taskString;
	//each input should be modififed and appended
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem
}
//Add a New tasks

var addTask=function(){
	console.log("add tasks...")
	var listItem= createNewTaskElement(taskInput.value);
	// append the list item to the incomplete task holder
	// When the button is pressed
	inCompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	}

//edit an existing task
var editTask=function(){
	console.log("add tasks...")
var listItem=this.parentNode;
var editInput=listItem.querySelector("input[type=text]");
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode")
if (containsClass){
		// if the class of the parent is .editmode:
		//switch from .editMode 
		//label text become the input's value
	label.innerText=editInput.value;


}else{
	editInput.value=label.innerText;

}
listItem.classList.toggle("editMode")
	//else
		//switch to editMode 
		//input Value becomes thhe label's text
	//toggle .editMode	
}

var deleteTask= function(){
	console.log("delete tasks...")

//Delete an existing task
var listItem=this.parentNode; // because this is the button and th elist is the parent of it.
var ul=listItem.parentNode; // acatually the ul is the grandparent of the button
	//so we are going to the parent and then removing it's child;
	ul.removeChild(listItem);

}

var taskCompleted=function(){
	console.log("completed tasks...")
	var listItem = this.parentNode; //this means the ckeck box that is checked, and it's parent is apparently the listItem
		//append the task list item to #completed-tasks 
	completedTasksHolder.appendChild(listItem)
	bindTaskEvents(listItem,taskIncomplete)
}

var taskIncomplete=function(){
	console.log("incomplete tasks...")
		var listItem = this.parentNode
//Mark a task as incomplete
	//when the check box is unchecked:
		//append to #incomplete-tasks
	inCompleteTasksHolder.appendChild(listItem)
	bindTaskEvents(listItem,taskCompleted)

}
var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
var checkbox=taskListItem.querySelector("input[type=checkbox]")
var editButton=taskListItem.querySelector("button.edit")
var deleteButton=taskListItem.querySelector("button.delete")
		//bind edit task to edit button
editButton.onclick=editTask;
		//bind delete task to delete button
deleteButton.onclick=deleteTask;
		//bind taskCompleted to the check box
checkbox.onchange=checkBoxEventHandler;
}
//setting the click handler to the add task function
addButton.onclick = addTask;
// cycle over inCompleteTasksHolder ul list items
	//for each list item
		//bind events to list item's children (taskInComplete)
for(var i=0; i < inCompleteTasksHolder.children.length; i++){
console.log("bind list items inComplete")
bindTaskEvents(inCompleteTasksHolder.children[i],taskCompleted)
}

for (var i=0;i<completedTasksHolder.children.length; i++){
console.log("bind list items complete")
bindTaskEvents(completedTasksHolder.children[i],taskIncomplete)
}
// cycle over CompleteTasksHolder ul list items
	//for each list item
		//bind events to list item's children (taskCompleted)

