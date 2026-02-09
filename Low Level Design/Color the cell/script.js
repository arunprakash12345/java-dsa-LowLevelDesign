const cardArr=document.querySelectorAll('.card');
const cards=document.querySelector('.cards');
const colorBtn=document.getElementById('color-button');
var tempColor=null;


cards.addEventListener('click',(event)=>{
    const cellNumber=event.target.dataset.value;
    if(tempColor!=null)
        {
            removeColor(tempColor);
        }
        colorCell(cellNumber);
});


colorBtn.addEventListener('click',()=>{
    const cellNumber=document.getElementById('cell-number').value;
    if(tempColor!=null)
    {
        removeColor(tempColor);
    }
    colorCell(cellNumber);
    
});

function colorCell(cellNumber){
    if(cellNumber>=1 && cellNumber<=9){
        cardArr.forEach((card)=>{
            if(card.dataset.value===cellNumber){
                card.style.backgroundColor='lightblue';
            }
        })
    }
    tempColor=cellNumber;
}

function removeColor(cellNumber){
    if(cellNumber>=1 && cellNumber<=9){
        cardArr.forEach((card)=>{
            if(card.dataset.value===cellNumber){
                card.style.backgroundColor='#E0E0E0';
            }
        })
    }
    else{
        alert('Please enter a valid cell number between 1 and 9');
    }
}

