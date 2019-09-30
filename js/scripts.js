(function() {
	
	var arr = ['1', '4', '54', '-32', '0', '21', '9', '100'];
	let newArr = [];

	var a = arr.map((string) => {
		newArr.push(parseInt(string));
	});

	let b = Math.max(...newArr);

	let c = Math.min(...newArr);

	console.log(b, c);




	

})();








// 2 decision


{/* <script>

var arr = ['1', '4', '54', '-32', '0', '21', '9', '100'];
let newArr = [];

var a = arr.map((string) => {
		newArr.push(parseInt(string));
	});

	let b = Math.max(...newArr);

</script> */}



// 1 decision

// (function() {
// 	'use strict';
	
// 	var arr = ['1', '4', '54', '-32', '0', '21', '9', '100'];

// 	var max = +arr[0];

// 	for (var i = 0; i < arr.length; i++) {
// 		arr[i] = +arr[i];
// 		console.log(arr[i]);
// 		if(arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}

// 	alert('Max number is: ' + max);
	

// })();


// $(document).ready(function(){


// });

