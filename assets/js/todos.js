//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

var todoStatusList = ['active', 'completed', 'removed'];

//array of todos
var todos = [
	{
		id: "0",
		content: "todo first",
		status: todoStatusList[1]
	},
	{
		id: "1",
		content: "todo second",
		status: todoStatusList[0]
	},
	{
		id: "2",
		content: "todo third",
		status: todoStatusList[2]
	}
];

console.log(todos);

//insert todos into DOM
var insertTodoIntoDOM = function(todos) {
	var todoList = '';

	for (var i in todos) {
		var todoTemplate = '<li data-id="'+todos[i]["id"]+'" class="todo-list-item">'+
			'<div class="view">'+
			'<input class="toggle" type="checkbox">'+
			'<label class="view-label-text">'+todos[i]["content"]+'</label>'+
			'<button class="remove"></button>'+
			'</div>'+
			'</li>';
		todoList += todoTemplate;
	}
	var element = document.getElementsByClassName("todo-list")[0];
	element.innerHTML = todoList;
	console.log(element);
};

window.onload = function(e){
insertTodoIntoDOM(todos);
};
/*filters*/
var filterShowAll, filterShowActive, filterShowCompleted, clearColmpleted, todoCount;

//show all todos

//show active todos

//show completed



//operations:

//add todo after lost focus and not empty or after enter key

//clear todo - remove from html-view (but not from array)

//clear completed todos

//edit todo - after double click start and after enter finish. if focus lost, no changes

//add/remove checked mark for all todos

//add/remove checked mark for current todo

