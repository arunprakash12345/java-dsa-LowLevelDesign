const tableBody=document.getElementById("table-Body");
window.addEventListener("load",()=>{
    for(let ri=0;ri<8;ri++)
    {
        const tr=document.createElement("tr");
        for(let ci=0;ci<8;ci++)
        {
            const td=document.createElement("td");
            td.textContent=`${ri}-${ci}`;
            td.setAttribute("data-index",`${ri}-${ci}`);
            td.classList.add("box");
            if((ri+ci)%2==0)
                td.classList.add("black");
            else
                td.classList.add("white");
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
});

tableBody.addEventListener("mouseover",(event)=>{
    const tableCell=event.target;
    const dataIndex=tableCell.dataset.index;
    const [ri,ci]=dataIndex.split('-').map((idx)=>parseInt(idx));
    console.log(ri,ci);
});