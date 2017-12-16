var drawer = document.getElementById('box1'); 
var box2   = document.getElementById('box2'); 

var icon  = document.getElementById('icon');
icon.addEventListener('click',function(e){

	
	
	drawer.classList.toggle('open');

	box2.classList.toggle('content');
	e.stopPropagation();
});

