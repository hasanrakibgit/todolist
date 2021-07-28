// 1. Select all item
const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const list = document.querySelector("#list");

//2. When I submit the form add a new element
form.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(input.value);
    // 2.1 create a new item
    const item = document.createElement("div")
    item.innerText = input.value
    item.classList.add("list-item")
    // console.log(item);
    // 2.2 add item to the list
    list.appendChild(item)
    // 2.3 clear input
    input.value = ""
    // 2.4 setup event listener to remove item when click on it
    item.addEventListener('click', ()=>{
        list.removeChild(item)
    })
})
