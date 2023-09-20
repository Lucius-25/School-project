export const createSaveButton = (btnText) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "btn-sm" , "mx-1")
    button.innerText = btnText;
    return button
}