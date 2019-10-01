
var edit = document.getElementById("edit-icon")
var dlt = document.getElementById("delete-icon")

edit.onclick = function () {
    window.location.href = "./edit_article.html";
};

var modalDel = document.getElementById("myModal");

var spanDel = document.getElementsByClassName("close")[0];

dlt.onclick = function () {
    modalDel.style.display = "block";
}
spanDel.onclick = function () {
    modalDel.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalDel) {
        modalDel.style.display = "none";
    }

}

