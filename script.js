// your code here
function takeInput(event){
	event.preventDefault(event);
	var inputName=document.getElementById('name').value;
	var inputYear=document.getElementById('year').value;
	if(inputName && inputYear){
		document.getElementById('url').textContent+='Name:'+inputName+" "+'Graduation Year:'+inputYear;
		}
	else if(!inputYear && inputName){
		document.getElementById('url').textContent+='Name:'+inputName;
	}
	else{
		document.getElementById('url').textContent+='Graduation Year:'+inputYear;
	}
	
	
}
