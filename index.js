let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

if (inputValue === "") {
    alert("You must write somehting!");
} else {
    $("#list").append(li);
}

function crossOut() {
    li.toggleClass("strike");
}

li.on("dbclick", function crossOut() {
    li.toggleClass("strike");
});

let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delete")
}

$("#list").sortable();