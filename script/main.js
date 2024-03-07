function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("taskname").value;
    const listItem = document.createElement("li");

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement)
    list.appendChild(listItem);
}

