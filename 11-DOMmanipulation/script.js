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

// Example 6

document.getElementById("teaList").addEventListener("click", function(event) {
    if(event.target && event.target.matches(".teaItem")){
        alert("You clicked on: " + event.target.textContent);
    }
});

// Example 7

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();  // here we write this line to stop the web from doing its deafult behavior, like for a form its default behavior is to submit the form and refresh the page, but sometimes we dont want that, we want to validate the data first before submittting the form and thats is why we use this
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
});

// Example 8

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 9

document.getElementById("toggleHighlight").addEventListener("click", function(){
    let text = document.getElementById("descriptionText");
    text.classList.toggle("highlight");
})