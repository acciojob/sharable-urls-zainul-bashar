// your code here
var btn=document.getElementById('button');
btn.addEventListner("click",takeInput);
function takeInput(){
	event.preventDefault()
	var inputName=document.getElementById('name').value;
	var inputYear=document.getElementById('year').value;
	if(inputName && inputYear){
		document.getElementById('url').textContent+='Name:'+inputName+'Graduation Year:'+inputYear;
		}
	else if(!inputYear && inputName){
		document.getElementById('url').textContent+='Name:'+inputName;
	}
	else{
		document.getElementById('url').textContent+='Graduation Year:'+inputYear;
	}
	
	
}
