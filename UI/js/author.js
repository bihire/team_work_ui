
var edit = document.getElementById("edit-icon")
var dlt = document.getElementById("delete-icon")

edit.onclick = function () {
    window.location.href = "./edit_article.html";
};

// Get the modal
var modalDel = document.getElementById("myModal");


// Get the <span> element that closes the modal
var spanDel = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
dlt.onclick = function () {
    modalDel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDel.onclick = function () {
    modalDel.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalDel) {
        modalDel.style.display = "none";
    }

}

