let tableData = [];
let currentElement = null;

function displayData(){
    const box = document.getElementById("table_data");
    box.innerHTML = "";
    tableData.forEach((element)=>{
        box.innerHTML += `
            <tr>
                <td>${element.name}</td>
                <td>
                    <button id=${element.id} onclick="editData(this)">Edit</button>
                    <button id=${element.id} onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>
        `
    })
    document.getElementById("name").value = "";
}

function addData(){
    const name = document.getElementById("name").value;
    if(currentElement){
        tableData[currentElement] = {...tableData[currentElement],name};
        currentElement = null;
    } else {
        const newElement = {id:Math.random() * 100 , name};
        tableData.push(newElement);
    }
    displayData();
}

function deleteRow(element){
    const removedItem = tableData.filter(ele => ele.id != element.id);
    tableData = removedItem;
    displayData();
}

function editData(element){
    const selectedElemet = tableData.findIndex(e=>e.id == element.id);
    document.getElementById("name").value = tableData[selectedElemet].name;
    currentElement = selectedElemet;
}