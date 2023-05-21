const $seeComments = document.getElementById("see"),
    $card = document.getElementById("card"),
    $comments = document.getElementById("comments"),
    $backComments = document.getElementById("back"),
    $closeModal = document.getElementById("modal-close"),
    $modal = document.getElementById("modal"),
    $like = document.getElementById("like");


//FUNCTIONS   
const VisibilityComments = () => {
    $comments.style.display = "flex";
    $card.style.display = "none";
}

const VisibilityPost = () => {
    $comments.style.display = "none";
    $card.style.display = "flex";
}

const CloseModalView = () => {
    $modal.classList.remove("active");
    $modal.classList.add("no-active");
}

const OpenModalView = () => {
    $modal.classList.remove("no-active");
    $modal.classList.add("active");
}

//EVENTS CLICK
document.addEventListener("click", (e) => {
    if (e.target === $seeComments)
        VisibilityComments();
    if (e.target === $backComments)
        VisibilityPost();
    if (e.target === $closeModal)
        CloseModalView();
    if (e.target === $like)
        OpenModalView();
    if (e.target === $modal)
        CloseModalView();
});