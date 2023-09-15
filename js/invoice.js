// variables

const products = [
    {
        id : 1,
        name : "Domain Sales",
        price : 15,
    },
    {
        id : 2,
        name : "Web Design",
        price : 150,
    },
    {
        id : 3,
        name : "Graphic Design",
        price : 100,
    },
    {
        id : 4,
        name : "Web Development",
        price : 500,
    },
    {
        id : 5,
        name : "Application Development",
        price : 1000,
    },
    {
        id : 6,
        name : "Maintenance",
        price : 50,
    }
]

//selector

const app =document.querySelector("#app");
const recordForm =app.querySelector("#recordForm");
const productSelect =app.querySelector("#productSelect");
const quantityInput =app.querySelector("#quantityInput");
const recordAddBtn =app.querySelector("#recordAddBtn");
const records =app.querySelector("#records");
const totalCost = app.querySelector("#totalCost");

// function

const createProductOption = (product) => {
    const option = document.createElement("option")
    option.value = product.price;
    option.innerText = product.name;
    return option;
}
/////////////////////////Making New Record Row/////////////////////////

const createRecordRow = (product, quantity) => {
    const tr = document.createElement("tr");
    tr.setAttribute('row-product-id', product.id)
    const cost = product.price * quantity;
    tr.classList.add("recordRow")
    tr.innerHTML = `
    <td class="row-num"></td>
    <td class="text-start">${product.name}</td>
    <td class="text-end">${product.price}</td>
    <td class="text-end row-quantity">${quantity}</td>
    <td class="text-end row-cost">${cost}</td>
    `
    return tr;
}

//////////////////////////Counting Total///////////////////////////////

const costTotal = () => {
    // let total = 0;
    // const rowCosts = document.querySelectorAll(".row-cost");
    // console.log([...rowCosts]);
    // rowCosts.forEach(rowCosts => {
    //     total += parseFloat(rowCosts.innerText);
    // })
    
    totalCost.innerText = [...document.querySelectorAll(".row-cost")].reduce((pv , cv) => pv + parseFloat(cv.innerText), 0)
    return costTotal;
}

///////////////////////////////////////////////////////////////////////

const addNewRecord = (product , quantity) => {
    records.append(createRecordRow(product, quantity));
}

///////////////////////////////////////////////////////////////////////

const updateExistedRecord = (row, product, quantity) => {
    const currentRowQuantity = row.querySelector(".row-quantity");
    const currentRowCost = row.querySelector(".row-cost");
    currentRowQuantity.innerText =
    parseFloat(currentRowQuantity.innerText) + parseFloat(quantity);

    currentRowCost.innerText= currentRowQuantity.innerText * product.price;
}

///////////////////////////////////////////////////////////////////////

const handleRecordForm = (event) => {
        event.preventDefault();
        const data = new FormData(recordForm);
    
        const currentProduct = products.find(
            (product) => product.id == data.get("productSelect")
        );
    
        const isExitedProduct = document.querySelector(
            `[row-product-id = '${currentProduct.id}']`)
    

        if(isExitedProduct){
            updateExistedRecord(isExitedProduct, currentProduct, data.get("quantityInput"))
        }
        else{
            addNewRecord(currentProduct, data.get("quantityInput"))
        }
    
        recordForm.reset()
    
        costTotal()
    }

// process

products.forEach((product) => 
    productSelect.append(new Option(product.name, product.id))
);

recordForm.addEventListener("submit", handleRecordForm)