const parentContainer = document.querySelector(".parent-container");

window.addEventListener("load", () => {
    const types = ["LOWER", "UPPER", "CAMEL","PASCAL","SNAKE","KEBAB"];

    for (let i = 0; i < types.length; i++) {
        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");
        textContainer.innerHTML = `
            <span class="title">${types[i]} CASE</span>
            <div class="text-content">
                --
            </div>`;
        parentContainer.appendChild(textContainer);
    }
});

parentContainer.addEventListener("click",(event)=>{
    if(!event.target.classList.contains("btn"))return;
    const inputValue = event.target.previousElementSibling.value;
    changeText(inputValue);
});

function changeText(inputValue)
{
    const allTextBox=document.querySelectorAll(".text-content");
    for (let i = 0; i < allTextBox.length; i++)
    {
        if(i==0) allTextBox[i].innerText=inputValue.toLowerCase();
        else if(i==1) allTextBox[i].innerText=inputValue.toUpperCase();
        else if(i==2) allTextBox[i].innerText=toCamelCase(inputValue);
        else if(i==3) allTextBox[i].innerText = toPascalCase(inputValue);
        else if(i==4) allTextBox[i].innerText = toSnakeCase(inputValue);
        else if(i==5) allTextBox[i].innerText = toKebabCase(inputValue);
    }
}

function toCamelCase(str)
{
    const camelStr = str.toLowerCase().trim().split(/\s+/).map((word,index)=>
        index===0?word:word.charAt(0).toUpperCase()+word.slice(1)
    ).join("");
    return camelStr;
}
function toPascalCase(str)
{
    const pascalStr = str.toLowerCase().trim().split(/\s+/).map((word,index)=>
        word.charAt(0).toUpperCase()+word.slice(1)
    ).join("");
    return pascalStr;
}
function toSnakeCase(str)
{
    const snakeStr = str.toLowerCase().trim().split(/\s+/).join("_");
    return snakeStr;
}
function toKebabCase(str)
{
    const kebabStr = str.toLowerCase().trim().split(/\s+/).join("-");
    return kebabStr;
}