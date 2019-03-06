// get elements
let itemForm = document.getElementById('itemForm');
let itemInput = document.getElementById('itemInput');
let messageContainer = document.getElementById('alert-message');
let listItem  = document.querySelector('.list');

let items = [];
let content;

itemForm.addEventListener("submit", e => {
    e.preventDefault();
    let textValue = itemInput.value;
    // check for empty values
    if(textValue === ""){
        showMessage("Please enter a valid input" , "danger");
    } else {
        addItem(textValue);
        items.push(textValue);
        //console.log(items);
        //localStorage
    }
})

//showMessage function
function showMessage(text, type){
    messageContainer.classList.add("show", `alert-${type}`);
    messageContainer.innerHTML = `<p>${text}</p>`;

    setTimeout(() =>{
        messageContainer.classList.remove("show", `alert-${type}`);
        messageContainer.classList.add("hide");
    } , 3000)
}

function addItem(itemText){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `<h5 class="item-name">${itemText}</h5>
                        <div class="items-icons">
                            <a href="#" class="complete-item item-icon"><i class="far fa-check-circle"></i></a>
                            <a href="#" class="delete-item item-icon"><i class="fas fa-trash"></i></a>
                            <a href="#" class="edit-item item-icon"><i class="far fa-edit"></i></a>
                        </div>`;

    listItem.appendChild(itemDiv);
    itemInput.value = "";
}
