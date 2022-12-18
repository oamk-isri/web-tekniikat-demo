
// set variables
let postComment = document.getElementById("postComment");
let messageBox = document.getElementById("messageBox");

postComment.addEventListener("click", postMessage);

function postMessage() {

    // get inputs
    let commentField = document.getElementById("commentField").value;
    let nameField = document.getElementById("nameField").value;
    let dateField = dateConstructor();
    let postHeader = dateField + " (" + nameField + ")";

    // formulate comment structure
    let postFrame = document.createElement("div");
    let postName = document.createTextNode(postHeader);
    let postComment = document.createTextNode(commentField);

    let postTitle = document.createElement("h4");
    let postBody = document.createElement("p");

    // add bootstrap classes for the comment body
    postFrame.setAttribute("class", "container border p-4 mb-4");
    postBody.setAttribute("class", "p-2");

    if (document.getElementById("importantToggle").checked) {
        postFrame.setAttribute("class", "container border border-danger p-4 mb-4");
    }

    // structure and append the comment
    postTitle.appendChild(postName);
    postBody.appendChild(postComment);

    postFrame.appendChild(postTitle);
    postFrame.appendChild(postBody);

    messageBox.appendChild(postFrame);

    // clear the input fields
    document.getElementById("nameField").value = "";
    document.getElementById("commentField").value = "";
    document.getElementById("importantToggle").checked = false;
}

function dateConstructor() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return day + "." + month + "." + year;
}

