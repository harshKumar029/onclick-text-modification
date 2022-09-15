function show() {
    alert('i am javascript');
}


var a = document.getElementById("result").innerHTML;
let b = a.toUpperCase();
// const myTimeout = setTimeout(result, 5000);
function reset(){ 
    if(z=1){
        document.getElementById("result").innerHTML= a; 
        z=0;
    } 
};
var z;
console.log("before"+z);
function clicked() {
    if (z == 1) {
        document.getElementById("result").innerHTML = a;
        z=0;
    }
    else {
        document.getElementById("result").innerHTML = b;
        z=1;
    }
};
console.log("after"+z);