init();

function plus() {  

  c.value = parseInt(a.value) + parseInt(b.value);
} 

function minus() {
  c.value = parseInt(a.value) - parseInt(b.value);
}

function multiply() {
  c.value = parseInt(a.value) * parseInt(b.value);
}

function divide() {
  c.value = parseInt(a.value) / parseInt(b.value);
}

function init() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
}