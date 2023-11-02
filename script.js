const itemForm=document.getElementById('input-form');
const inputInput=document.getElementById('item-input');
const inputList=document.getElementById('item-list');



function addItem(e){
    const newInput=inputInput.value;
    e.preventDefault();

    // form validation

    if (newInput === ''){
        alert('Please Enter a New Tasks');
        return;
    }

    //Add New Item

    const li=document.createElement('li');
    li.append(document.createTextNode(newInput));

    const button=createButton('delete-item');
    li.appendChild(button);

    inputList.appendChild(li);
    inputInput.value='';


}
function createButton(classes){
    const button=document.createElement('button');
    button.className=classes;
    const icon=createIcon('fa-solid fa-trash');
    button.appendChild(icon);
    return button;

}

function createIcon(classes){
    const icon=document.createElement('i');
    icon.className=classes;
    return icon;
}
itemForm.addEventListener('submit', addItem);