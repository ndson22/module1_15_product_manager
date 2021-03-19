let listProduct;
console.log(listProduct)
function displayProduct(arr){
    let sout = "<table>"
    for(let i = 0;i<arr.length;i++){
        sout = `${sout}
        <tr>
            <td>${arr[i]}</td>
            <td><button onclick=changeProduct(${i}) >Edit</button></td>
            <td><button onclick=deleteProduct(${i})>Delete</button></td>
        </tr>`;
    }
    sout = sout + "</table>";
    setLocalStorage();
    document.getElementById("listProduct").innerHTML = sout;
    document.getElementById("newProduct").value ="";
}

function addNewProduct(){
    let newProduct = document.getElementById("newProduct").value;
    if(newProduct == ""){
        alert("Please enter a product")
    } else{
        listProduct.push(newProduct);
        alert("Add "+ newProduct + " successful")
        displayProduct(listProduct);
    }
}
function changeProduct(index){
    listProduct[index] = prompt("Change product to");
    displayProduct(listProduct);
}
function deleteProduct(index){
    listProduct.splice(index,1);
    localStorage.removeItem(`product${index}`)
    displayProduct(listProduct);
}
function setLocalStorage(){
    localStorage.setItem("listProduct",JSON.stringify(listProduct));
}
window.onload = getLocalStorage();
function getLocalStorage(){
    if(localStorage.getItem("listProduct") == null) {
        listProduct = [];
    }else{
    listProduct = JSON.parse(localStorage.getItem("listProduct"))
    }
    displayProduct(listProduct);
}
