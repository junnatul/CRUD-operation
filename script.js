let tbody = document.getElementById("table_body");
let global = [];
function getDataFromJson() {
    fetch('./db.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)
            global = data.employeeData;
render();

        })

}
getDataFromJson();

function render() {
  document.getElementById("table_body").innerHTML = "";
  console.log(global)
    global.map((item, index) => {
        let newRow = `<tr>
        <td>${item.name}</td>
        <td>${item.employeeID}</td>
        <td>${item.designation}</td>
        <td>${item.city}</td>
        <td>${item.contact}</td>
        <td><button type="button">Edit</button>&nbsp<button onClick=deleteData(${index}) type="button">Delete</button></td></td>`
        document.getElementById("table_body").innerHTML += newRow;

    })
}


function deleteData(index) {
    global.splice(index, 1);
    render();
}
  

