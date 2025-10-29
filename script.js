function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = document.getElementById('radius').value;
	radius = parseFloat(radius);

	if(isNaN(radius) || radius<0){
		document.getElementById('volume').value='NaN';
		return false;
	}

	let volume = (4/3)*Math.PI*Math.pow(radius, 3);

	volume=volume.toFixed(4);
      document.getElementById('volume').value = volume;
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
