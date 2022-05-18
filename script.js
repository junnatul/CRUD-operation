let tbody = document.getElementById("table_body");
let global = [];
let dataIndex="";
function getDataFromJson() {
  //hide edit button
  document.getElementById("edit_btn").style.display="none"
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
        <td><button onClick=editData(${index}) type="button">Edit</button>&nbsp<button onClick=deleteData(${index}) type="button">Delete</button></td></td>`
        document.getElementById("table_body").innerHTML += newRow;

    })
}
function editData(index){
  dataIndex=index
  document.getElementById("submit_btn").style.display="none"
  document.getElementById("edit_btn").style.display=""

 let data = global[index]
 console.log(data)
 document.getElementById("name").value=data.name
 document.getElementById("employeeID").value=data.employeeID
 document.getElementById("designation").value=data.designation
 document.getElementById("city").value=data.city
 document.getElementById("contact").value=data.contact
}
function edit(){
  let name=document.getElementById("name").value
  let employeeID=document.getElementById("employeeID").value
  let designation=document.getElementById("designation").value
  let city=document.getElementById("city").value
  let contact=document.getElementById("contact").value
  if(!name || !employeeID || !designation || !city || !contact){
    return;
  }
  let structured={
    "city": city,
    "contact": contact,
    "designation": designation,
    "employeeID": employeeID,
    "name":name
  }
  
  //set the data into their own position
  global[dataIndex]=structured
  document.getElementById("submit_btn").style.display=""
  document.getElementById("edit_btn").style.display="none"
  document.getElementById("name").value=""
  document.getElementById("employeeID").value=""
  document.getElementById("designation").value=""
  document.getElementById("city").value=""
  document.getElementById("contact").value=""


  render();
}

function deleteData(index) {
    global.splice(index, 1);
    render();
}
function create(){
  console.log("me")
  let name=document.getElementById("name").value
  let employeeID=document.getElementById("employeeID").value
  let designation=document.getElementById("designation").value
  let city=document.getElementById("city").value
  let contact=document.getElementById("contact").value
  if(!name || !employeeID || !designation || !city || !contact){
    return;
  }
  console.log(employeeID)
  console.log(designation)
  console.log(city)
  console.log(contact)
  let structured={
    "city": city,
    "contact": contact,
    "designation": designation,
    "employeeID": employeeID,
    "name":name
  }
  global.push(structured)
  render();
}
