function newItem() {

//adding a new item to the list
let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

if (inputValue === "") {
    alert("You must write somehting!");
} else {
    $("#list").append(li);
}

//user can cross of an item
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
});

// adding a delete button
let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delete");
     }
}

$("#list").sortable();
