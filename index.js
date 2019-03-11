// get elements
let itemForm = document.getElementById('itemForm');
let itemInput = document.getElementById('itemInput');
let messageContainer = document.getElementById('alert-message');
let listItem = document.querySelector('.list');
let clearBtn = document.querySelector('.clear-item');

let itemData = [];
let content;

itemForm.addEventListener("submit", e => {
    e.preventDefault();
    let textValue = itemInput.value;
    // check for empty values
    if (textValue === "") {
        showMessage("Please enter a valid input", "danger");
    } else {
        addItem(textValue);
        itemData.push(textValue);
        //console.log(items);
        //localStorage

        handleItem(textValue);
    }
})

//showMessage function
function showMessage(text, type) {
    messageContainer.classList.add("show", `alert-${type}`);
    messageContainer.innerHTML = `<p>${text}</p>`;

    setTimeout(() => {
        messageContainer.classList.remove("show", `alert-${type}`);
        messageContainer.classList.add("hide");
    }, 5000)
}

function addItem(itemText) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = `<h5 class="item-name">${itemText}</h5>
                        <div class="items-icons">
                            <a href="#" class="complete-item item-icon"><i class="far fa-check-circle"></i></a>
                            <a href="#" class="edit-item item-icon"><i class="far fa-edit"></i></a>
                            <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
                        </div>`;


    listItem.appendChild(itemDiv);

    itemInput.value = "";
}


function handleItem(textValue) {

    const items = listItem.querySelectorAll('.item');

    items.forEach(function (item) {
        // addEventListener to complete-icon
        item.querySelector('.complete-item').addEventListener("click", function (e) {
            e.preventDefault();
            item.querySelector(".item-name").classList.toggle('completed');
            this.classList.toggle('visibility');
        });


        // addEventListener to edit-icon
        item.querySelector('.edit-item').addEventListener('click', function (e) {

            e.preventDefault();

            itemInput.value = textValue;

            document.querySelector('.list').removeChild(item);

            itemData = itemData.filter(function (item) {
                return item !== textValue;
            })

        });

        // addEventListener to delete-icon
        item.querySelector('.delete-item').addEventListener('click', function (e) {

            e.preventDefault();

            document.querySelector('.list').removeChild(item);

            itemData = itemData.filter(function (item) {
                return item !== textValue;
            })

            showMessage("Item successfully deleted", "success");
        });


    });
}

// clear button
clearBtn.addEventListener("click", function(){

    const items = listItem.querySelectorAll('.item');
    if(items.length > 0){
        items.forEach(function(item){
            listItem.removeChild(item);
        });

    } else {
        showMessage("There is no items",'danger');
    }
});