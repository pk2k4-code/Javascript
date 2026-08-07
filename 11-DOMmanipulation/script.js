// Example 1

document.getElementById("changeTextButton").addEventListener("click", function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The text has been changed!";
})

// Example 2

document.getElementById("highlightFirstCity").addEventListener("click", function() {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// Example 3

document.getElementById("changeOrder").addEventListener("click", function() {
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso";
    order.style.color = "yellow";
    order.style.backgroundColor = "brown";
});

// Example 4

document.getElementById("addNewItem").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5

document.getElementById("removeLastTask").addEventListener("click", function() {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});