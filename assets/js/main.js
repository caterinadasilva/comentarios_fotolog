function saveComment() {
	if ((document.getElementById('name').value === "") || 
		(document.getElementById('comment').value === "")) {
		alert("No has introducido tu nombre y/o comentario.");
	} else {
		var name = document.getElementById('name').value;
		var comment = document.getElementById('comment').value;
		localStorage.setItem(name, comment);
	}
}

function printComment() {
	document.getElementById("datos").innerHTML = "";
	for (var i = 0; i < localStorage.length; i++) {
		var comentarioNombre = localStorage.key(i);
	    var comentarioText = localStorage.getItem(comentarioNombre);

		var singleComment = document.createElement('DIV');
		singleComment.className = "singleComment";

		var h5Comment = document.createElement('h5');
		var h5tComment = document.createTextNode(comentarioNombre);
		h5Comment.appendChild(h5tComment);

		var pComment = document.createElement('P');
		var tComment = document.createTextNode(comentarioText);
		pComment.appendChild(tComment);

		singleComment.appendChild(h5Comment);
		singleComment.appendChild(pComment);

		document.getElementById("datos").appendChild(singleComment);
	}
}

function deleteComments() {
	window.localStorage.clear();
	document.getElementById('name').value = "";
	document.getElementById('comment').value = "";
	document.getElementById("datos").innerHTML = "";
}

function makeComment(){
	if (typeof(Storage) !== "undefined") {
		saveComment();
		printComment();
		document.getElementById("name").value = "";
		document.getElementById("comment").value = "";
	} else {
	    alert("Sorry! No Web Storage support");
	}
}
printComment();