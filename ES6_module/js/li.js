import { delBtnHandler } from "./ui/handler.js";

export const createLi = (text) => {
    const li = document.createElement("li");
    li.classList.add("mt-2")

    const delBtn = document.createElement("button"); 
    delBtn.innerText = "Delete";
    li.append(delBtn);

    const textNode = document.createTextNode(" "+ text)
    li.append(textNode)

    delBtn.addEventListener("click", delBtnHandler)

    return li;
}

