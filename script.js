const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Get all price elements
    const prices = document.querySelectorAll(".price");

    let total = 0;

    // Add each price
    prices.forEach(function(price) {
        total += Number(price.innerText);
    });

    // Create new row
    const row = document.createElement("tr");

    // Create cell
    const cell = document.createElement("td");

    cell.innerText = total;

    // Add cell to row
    row.appendChild(cell);

    // Add row to table
    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
