var count = 1;

function plus() {
    count = count +1;
    document.getElementById("counter").innerHTML = count;
}


function minus() {
    count--;
    document.getElementById("counter").innerHTML = count;
}


function reset() {
    count = 1;
    document.getElementById("counter").innerHTML = count;
}