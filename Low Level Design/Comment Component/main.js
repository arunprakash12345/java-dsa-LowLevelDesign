function createInputBox() {
    const elem = document.createElement("div");
    elem.setAttribute("class", "comment-reply-container");
    elem.innerHTML = `
    <input type="text" placeholder="Enter your comment" class="input" />
    <button class="btn">Submit</button>`;

    return elem;
}

function createReply(inputValue) {
    const elem = document.createElement("div");
    elem.setAttribute("class", "comment");
    elem.innerHTML = `
    <p class="title">${inputValue}</p>
            <p class="reply">Add Reply</p> `;
    return elem;
}

const commentContainer = document.querySelector(".comment-container");
commentContainer.addEventListener("click", (event) => {
    const elem = event.target.closest(".comment");
    if (event.target.getAttribute("class") === "reply") {
        const replyBox = createInputBox();
        elem.appendChild(replyBox);
    }
    if (event.target.getAttribute("class") === "btn") {
        const inputValue = event.target.previousElementSibling.value;
        const createdComment = createReply(inputValue);
        elem.appendChild(createdComment);
        event.target.parentElement.remove();
    }

});
