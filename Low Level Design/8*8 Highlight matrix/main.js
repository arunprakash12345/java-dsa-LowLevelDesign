const table = document.querySelector(".table");

for (let i = 1; i <= 8; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 8; j++) {
        const cell = document.createElement("td");
        cell.textContent = `${i},${j}`;
        cell.classList.add("td");
        row.appendChild(cell);
    }
    table.appendChild(row);
}

const tableData = document.querySelector("table");
tableData.addEventListener("mouseover", (e) => {
    if (e.target.tagName !== "TD") return;
    const cellNumber = e.target.innerText.split(",");
    const row = cellNumber[0];
    const col = cellNumber[1];
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
        const [r, c] = cell.innerText.split(",");
        if (r === row || c === col)
            cell.classList.add("highlight");
    });

});

tableData.addEventListener("mouseout", (e) => {
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
        cell.classList.remove("highlight");
    });
});

