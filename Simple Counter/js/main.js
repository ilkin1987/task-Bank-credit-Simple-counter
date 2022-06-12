var count = document.getElementById("count");
var add = document.getElementById("add");
var sub = document.getElementById("sub");
var reset = document.getElementById("reset");

add.addEventListener("click", () => {
    count.innerHTML++;
});

sub.addEventListener("click", () => {
    count.innerHTML--;
});

reset.addEventListener("click", () => {
    count.innerHTML=0;
});