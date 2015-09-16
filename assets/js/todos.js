//"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

var todoStatusList = ['active', 'completed', 'removed'];

var todos = {
    list: [
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
    ],
    getAll: function() {
        return this.list.filter(function(item) { return item.status != todoStatusList[2]});
    },
    getActive: function() {
        return this.list.filter(function(item) { return item.status === todoStatusList[0]});
    },
    getCompleted: function() {
        return this.list.filter(function(item) { return item.status === todoStatusList[1]});
    }
};

//insert todos into DOM
var renderTodoList = function(todos) {
	var todoList = '';

	for (var i in todos) {
        var checked = (todos[i].status == 'completed')?'checked':'';
		var todoTemplate = '<li data-id="' + todos[i].id + '" class="todo-list-item">' +
			'<div class="view">' +
			'<input class="toggle" type="checkbox" ' + checked + '>' +
			'<label class="view-label-text">' + todos[i].content + '</label>' +
			'<button class="remove"></button>' +
			'</div>' +
			'</li>';
		todoList += todoTemplate;
	}
	var element = document.getElementsByClassName("todo-list")[0];
	element.innerHTML = todoList;
};

window.onload = function(e){

    var checkItemButton = document.getElementsByClassName('toggle');
    var checkAllButton = document.getElementById('toggle-all');
    var getAllButton = document.getElementById('filterAll');
    var getActiveButton = document.getElementById('filterActive');
    var getCompletedButton = document.getElementById('filterCompleted');
    var clearCompletedButton = document.getElementById('clearCompleted');

    renderTodoList(todos.getAll());

    //init checkAll by toggle-all click
    checkAllButton.addEventListener('click', checkAll);
    //checkItemButton.addEventListener('click', checkItem);
    getAllButton.addEventListener('click', filterHandler);
    getActiveButton.addEventListener('click', filterHandler);
    getCompletedButton.addEventListener('click', filterHandler);
};

/*filters*/
var filterHandler = function (e) {
    var elNew = e.target;
    if (elNew.classList.contains('selected')) return;

    var elOld = document.getElementsByClassName('filters')[0].getElementsByClassName('selected')[0];
    elOld.classList.remove('selected');
    elNew.classList.add('selected');

    switch(elNew.hash) {
        case '#/':
            renderTodoList(todos.getAll());
            break;
        case '#/active':
            renderTodoList(todos.getActive());
            break;
        case '#/completed':
            renderTodoList(todos.getCompleted());
            break;
        default:
            break;
    }
};


//operations:

//add todo after lost focus and not empty or after enter key

//clear todo - remove from html-view (but not from array)

//clear completed todos

//edit todo - after double click start and after enter finish. if focus lost, no changes

//add/remove checked mark for all todos
var checkAll = function (e) {
    var el = e.target;
    var checkItemsList = document.getElementsByClassName('toggle');
    if (el.checked) {
        for (var i in checkItemsList) {
            checkItemsList[i].checked = true;
        }
    } else {
        for (var i in checkItemsList) {
            checkItemsList[i].checked = false;
        }
    }
}

//add/remove checked mark for current todoo
var checkItem = function (e) {
    //var el = e.target;
    //console.count('checkItem: ', checkItemButton);
}

var changeStatus = function () {

}
