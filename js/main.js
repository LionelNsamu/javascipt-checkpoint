function bold(){
	document.getElementById("p").style.fontWeight = "bold";
}

function italic()
{
	document.getElementById("p").style.fontStyle = "italic";

}

function underline()
{
	document.getElementById("p").style.textDecoration = "underline";

}

function setfontFamily()
{
	 var select = document.getElementById("fonts").value;

	document.getElementById("p").style.fontFamily = select	;
}

function setfontSize()
{
	
	var select = document.getElementById("size").value;

	document.getElementById("p").style.fontSize = select ;
}