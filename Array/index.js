const Items = [];
showItem();
function add() {
    if (arr.value == '' && price.value == '' && quan.value == '') {
        disp.innerHTML = 'PLEASE FILL THE EMPTY SPACE'
        console.log('PLEASE FILL THE EMPTY SPACE');
    } else {
        Items.push(arr.value, price.value, quan.value)
        console.log(Items);
        document.getElementById('arr').value = ''
        disp.innerHTML = ''
        showItem();
    }
}
function showItem() {
    if (Items == "") {
        disp.innerHTML = "No items yet"
        document.getElementById("disp").style.display = "block"
        document.getElementById("myTable").style.display = "none"
        document.getElementById("allButtons").style.display = "none"
    } else {
        disp.innerHTML = ""
        document.getElementById("disp").style.display = "none"
        document.getElementById("myTable").style.display = "table"
        document.getElementById("allButtons").style.display = "block"
        myTable.innerHTML = `
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
        `
        for (var i = 0; i < Items.length; i++) {
            myTable.innerHTML += `
            <tr>
            <th scope="row">${i + 1}.</th>
            <td>${Items[i].arr}</td>
            <td>${Items[i].price}</td>
            <td>${Items[i].quan}</td>
            <td class='btn btn-warning btn-sm bg-warning m-2' onclick="editItem()">Edit</td>
            <td class='btn btn-danger btn-sm bg-danger' onclick="deleteItem(${i})">Delete</td>
            </tr>`
        }

    }
}

const deleteItem = (index)=>{
    console.log(index)
    Items.splice(index,1)
    showItem()
}


function deleteFirst() {
    Items.shift()
    showItem();
}
function deleteLast() {
    Items.pop()
    showItem();
}
function addItem() {
    var item = prompt("Enter item you want to add")
    Items.unshift(item)
    showItem();
}
function deleteAll(){
    Items.splice(0,Items.length)
    showItem()
    
}

let allPeople = ['john', 'paul', 'george', 'ringo', 'pete', 'stuart', 'rriam', 'george', 'norman', 'jim', 'tommy', 'jimmy', 'colin', 'greg', 'bermard']
console.log(allPeople.splice(11,4))