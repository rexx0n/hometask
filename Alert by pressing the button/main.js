function aler () {
    return alert('Hello') 
}
function init () {
    btn = document.querySelector("button");
    btn.addEventListener("click", aler());
}

init()
