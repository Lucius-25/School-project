const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn ");
const doneListCounter = document.querySelector("#doneListCounter ");
const totalListCounter = document.querySelector("#totalListCounter ");
const lists = document.querySelector("#lists ");

//function

const handleNewList = () => {
  const list = createList(textInput.value)
  lists.append(list);
  list.querySelector(".animate__animated").addEventListener("animationend", () => {
    console.log("hello");
    list.querySelector(".animate__animated")
    .classList.remove("animate__fadeInUp" , "animate__shakeX")
  })


  countList()

  textInput.value = null;
}

const makeRandomId = (length) => {
  let chr = "adb17437f3bcc17f292a2d7be411af"
  // console.log(Math.floor(Math.random(chr)*61));

  let result ="";

  for (let i=1 ; i<=length; i ++){
    result += chr[getInteger(0, chr.length)];
  }
  return result;

}



// console.log(makeRandomId(10));


///min max random 

const  getInteger= (min , max) =>{
  return Math.floor(Math.random() * (max -min) + min);
}

// console.log(getInteger(20, 54));

// console.log(getInteger(20, 60));


const countList = () => {
  const totalList = lists.querySelectorAll(".list").length;

  totalListCounter.innerText = totalList;
  // doneListCounter.innerText= lists.querySelectorAll(".list-checker [type='checkbox']: checked ").length;
  doneListCounter.innerText = lists.querySelectorAll(".list-checker [type = 'checkbox']:checked").length;
  if(totalList === 0){
    lists.innerHTML = `<div class= 'text-center fw-bold empty-stage'>
      <img src="./undraw_File_searching_re_3evy.png" alt="" width="200px">
      <p>There is no List</p>
    </div>`
  }else{
    lists.querySelector(".empty-stage")?.remove()
  }
}


/////////////////////////////////////////////////////////////////////////////////////////
const createList = (listText)=> {

  const checkerId = makeRandomId(10);

  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `
  <div class="animate__animated animate__fadeInUp border border-3 border-primary p-3 d-flex justify-content-between align-items-start mb-4 ">
  <div class="form-check list-checker">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="${checkerId}"
    />
    <label id="listLabel" for= "${checkerId}">
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
    if(decision){
      list.querySelector(".animate__animated").classList.add("animate__fadeOut")

      list.querySelector(".animate__animated").addEventListener("animationend", () => {
        list.remove()
        countList()
      })
      
      
    }
    // decision && list.remove()
    // countList()
  }
    
  )

  const listChecker = list.querySelector(".list-checker");
  listChecker.addEventListener("click", () => {
    console.log("U checked");
    // const doneList = list.querySelector("#listLabel")
    list.querySelector("#listLabel").classList.add("text-decoration-line-through");
    list.querySelector(".animate__animated").classList.add("animate__shakeX")
    countList()
    textInput.value = null;
  })
  const listEditBtn = list.querySelector("#list-edit-btn");
  const listLabel = list.querySelector("#listLabel");

  listEditBtn.addEventListener("click", () => {
    console.log("u edit");
    const editInput = document.createElement("input");
    editInput.value = listLabel.innerText;
    editInput.classList.add("form-control")

    listLabel.innerText = null;
    listLabel.append(editInput);

    editInput.addEventListener("blur", () => {
      listLabel.innerText = editInput.value;
    })
  })


  return list;
}

const countNewList = (event) => {
  if(event === "Enter"){}
}

//process
countList()
addBtn.addEventListener("click", handleNewList)

textInput.addEventListener("keyup", (event) => {
  if(event.key === "Enter"){
    handleNewList()
  }
})

// idk how to find

someId.addEventListener("keyup", (event) => {
if(event.key === "Enter"){
  someFunction()
}
})

