let tbody = document.getElementById('table_body');
fetch('./db.json')
  .then(response => response.json())
  .then(data => {
    data.employeeData.map((item) => {
      let newRow = `<tr>
                      <td>${item.name}</td>
                      <td>${item.employeeID}</td>
                      <td>${item.designation}</td>
                      <td>${item.city}</td>
                      <td>${item.contact}</td>
                      <td><button type="button">Edit</button>&nbsp<button type="button">Delete</button></td>
                  </tr>`;
      document.getElementById('table_body').innerHTML += newRow;
    })
  })


  

