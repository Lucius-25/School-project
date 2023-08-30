const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn ");
const doneListCounter = document.querySelector("#doneListCounter ");
const totalListCounter = document.querySelector("#totalListCounter ");
const lists = document.querySelector("#lists ");

//function

const countList = () => {
  totalListCounter.innerText =lists.querySelectorAll(".list").length;
  
}


/////////////////////////////////////////////////////////////////////////////////////////
const createList = (listText)=> {
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
  <div class="border border-3 border-primary p-3 d-flex justify-content-between align-items-start mb-4 ">
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      ${listText}
    </label>
  </div>

  <div class="list-control">
    <button class="btn btn-outline-primary" id="list-edit-btn">
      <i class="bi bi-pencil"></i>
    </button>

    <button class="btn btn-outline-primary" id="list-del-btn">
      <i class="bi bi-trash"></i>
    </button>
  </div>
</div>
  `

  const listDelBtn = list.querySelector("#list-del-btn")
  listDelBtn.addEventListener("click", () => {
    const decision = window.confirm("Are you sure?")
    // if(decision){
    //   list.remove()
    // }
    decision && list.remove()
  }
    
  )

  return list;
}



//process

addBtn.addEventListener("click",() => {
  // const textInput = 
  // console.log(textInput.value);
  lists.append(createList(textInput.value));

  // totalListCounter.innerText =lists.querySelectorAll(".list".length);
  // console.log(document.querySelectorAll(".list").length);


  textInput.value = null;



})