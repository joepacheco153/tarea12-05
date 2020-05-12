function resultado(){
    var x = document.getElementById("numero").value;
    document.getElementById("resultado").value = factorial(x);
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}