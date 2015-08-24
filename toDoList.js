/*NEJDE TO*/
function addEntry(entry){
	var item = document.getElementById("new-entry").getAttribute('value');
	console.log(item);
	if(entry.length == 0)
	{
		alert("No insert ITEM !");
	}
	else {
		$( "#todo-list" ).append('<li>'+entry+'</li>').listview;
		var ul = document.getElementById("todo-list");
		var newLI = document.createElement("LI");
		ul.appendChild(newLI);
	}

	/* Clear editbox after insert item*/
	$('#new-entry').attr('value', ""); 
}

var btnAdd = document.getElementById('btn-add');
var item = document.getElementById("new-entry").getAttribute('value');
btnAdd.addEventListener('click', addEntry('sdfds'));

document.getElementById("btn-add").addEventListener("click", addEntry);