window.onload = function () {

	var r1_c1 = document.getElementById("row1_c1"),
			r1_c2 = document.getElementById("row1_c2"),
			r1_c3 = document.getElementById("row1_c3"),
			r2_c1 = document.getElementById("row2_c1"),
			r2_c2 = document.getElementById("row2_c2"),
			r2_c3 = document.getElementById("row2_c3"),
			r3_c1 = document.getElementById("row3_c1"),
			r3_c2 = document.getElementById("row3_c2"),
			r3_c3 = document.getElementById("row3_c3"),
			clear_board = document.getElementById("reset_button");

	player = 0;

			square1 = false,
			square2 = false,
			square3 = false,
			square4 = false,
			square5 = false,
			square6 = false,
			square7 = false,
			square8 = false,
			square9 = false;

	r1_c1.onclick = function () {
		if(square1 != true) {
			if(player % 2 === 0) {
				r1_c1.innerHTML = "0";
				r1_c1.style.background = "yellow";
				player += 1;
			} else {
				r1_c1.innerHTML = "X";
				r1_c1.style.background = "green";
				player += 1;
			}
		} else {}
	
	square1 = true;
	
	};

	r1_c2.onclick = function () {
		if(square2 != true) {
			if(player % 2 === 0) {
				r1_c2.innerHTML = "0";
				r1_c2.style.background = "yellow";
				player += 1;
			} else {
				r1_c2.innerHTML = "X";
				r1_c2.style.background = "green";
				player += 1;
			}
		} else {}
	
	square2 = true;
	
	}

	r1_c3.onclick = function () {
		if(square3 != true) {
			if(player % 2 === 0) {
				r1_c3.innerHTML = "0";
				r1_c3.style.background = "yellow";
				player += 1;
			} else {
				r1_c3.innerHTML = "X";
				r1_c3.style.background = "green";
				player += 1;
			}
		} else {}
	
	square3 = true;
	
	}

	r2_c1.onclick = function () {
		if(square4 != true) {
			if(player % 2 === 0) {
				r2_c1.innerHTML = "0";
				r2_c1.style.background = "yellow";
				player += 1;
			} else {
				r2_c1.innerHTML = "X";
				r2_c1.style.background = "green";
				player += 1;
			}
		} else {}
	
	square4 = true;
	
	}

	r2_c2.onclick = function () {
		if(square5 != true) {
			if(player % 2 === 0) {
				r2_c2.innerHTML = "0";
				r2_c2.style.background = "yellow";
				player += 1;
			} else {
				r2_c2.innerHTML = "X";
				r2_c2.style.background = "green";
				player += 1;
			}
		} else {}
	
	square5 = true;
	
	}

	r2_c3.onclick = function () {
		if(square6 != true) {
			if(player % 2 === 0) {
				r2_c3.innerHTML = "0";
				r2_c3.style.background = "yellow";
				player += 1;
			} else {
				r2_c3.innerHTML = "X";
				r2_c3.style.background = "green";
				player += 1;
			}
		} else {}
	
	square6 = true;
	
	}

	r3_c1.onclick = function () {
		if(square7 != true) {
			if(player % 2 === 0) {
				r3_c1.innerHTML = "0";
				r3_c1.style.background = "yellow";
				player += 1;
			} else {
				r3_c1.innerHTML = "X";
				r3_c1.style.background = "green";
				player += 1;
			}
		} else {}
	
	square7 = true;
	
	};

	r3_c2.onclick = function () {
		if(square8 != true) {
			if(player % 2 === 0) {
				r3_c2.innerHTML = "0";
				r3_c2.style.background = "yellow";
				player += 1;
			} else {
				r3_c2.innerHTML = "X";
				r3_c2.style.background = "green";
				player += 1;
			}
		} else {}
	
	square8 = true;
	
	};

	r3_c3.onclick = function () {
		if(square9 != true) {
			if(player % 2 === 0) {
				r3_c3.innerHTML = "0";
				r3_c3.style.background = "yellow";
				player += 1;
			} else {
				r3_c3.innerHTML = "X";
				r3_c3.style.background = "green";
				player += 1;
			}
		} else {}
	
	square9 = true;
	
	};


clear_board.onclick = function() {
	if(player >= 1) {
		alert("The board has been reset. New Game!")
		r1_c1.innerHTML = '';
		r1_c1.style.backgroundColor = "black";
		r1_c2.innerHTML = '';
		r1_c2.style.backgroundColor = "black";
		r1_c3.innerHTML = '';
		r1_c3.style.backgroundColor = "black";
		r2_c1.innerHTML = '';
		r2_c1.style.backgroundColor = "black";
		r2_c2.innerHTML = '';
		r2_c2.style.backgroundColor = "black";
		r2_c3.innerHTML = '';
		r2_c3.style.backgroundColor = "black";
		r3_c1.innerHTML = '';
		r3_c1.style.backgroundColor = "black";
		r3_c2.innerHTML = '';
		r3_c2.style.backgroundColor = "black";
		r3_c3.innerHTML = '';
		r3_c3.style.backgroundColor = "black";
		square1 = false;
		square2 = false;
		square3 = false;
		square4 = false;
		square5 = false;
		square6 = false;
		square7 = false;
		square8 = false;
		square9 = false;
		player = 0;
		} else {}	

	};

		// r1_c2.style.background = "black";
		// clear_row1.innerHTML = '';
		// clear_row1.style.color = 'black';
		// document.getElementsByClassName("square").innerHTML = "";
	 	// document.getElementsByClassName("square").style.background = "black";
		// clear_rows.style.color = "black";


		function reset() {
			clear_board()
		}
};