// your code here
function takeInput(event){
	event.preventDefault(event);
	console.log(event);
	var inputName=document.getElementById('name').value;
	var inputYear=document.getElementById('year').value;
	if(inputName && inputYear){
		document.getElementById('url').textContent+='?name='+inputName+"&"+'year='+inputYear;
		}
	else if(!inputYear && inputName){
		document.getElementById('url').textContent+='?name='+inputName;
	}
	else{
		document.getElementById('url').textContent+='?year='+inputYear;
	}
	
	
}
