import { appTitle, counter, lists, saveBtn, textInput } from "./element.js"
import {  saveBtnHandler } from "./ui/handler.js";


export const app = document.querySelector("#app");

app.append(appTitle)
app.append(textInput)
app.append(saveBtn)
app.append(lists)
app.append(counter)

saveBtn.addEventListener("click", saveBtnHandler)
// delBtnSelector.addEventListener("click", delBtnHandler)