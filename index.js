//starting freelancers
const freelancers = [
    {name: 'Alice', occupation: 'Writer', startingPrice: 30},
    {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
    {name: 'Carol', occupation: 'Programmer', startingPrice: 70}
];

//create function that calculates starting price average
const priceValue = document.querySelector("#priceValue");

//create table
function createTableHeader(table) {
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Name", "Occupation", "Starting Price"];

    for (const header of headers) {
        const th = document.createElement("th");
        th.innerText = header;
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);
}

//Table Body/Rows
function createTableBody(freelancers) {
    const tbody = document.createElement("tbody");

    for (const freelancer of freelancers) {
        const tableRow = document.createElement("tr");

        for (const key in freelancer) {
            const td = document.createElement("td");
            td.innerText = freelancer[key];
            tableRow.appendChild(td);
        }

        tbody.appendChild(tableRow);
    }

    return tbody;
}

//calculate the average price
function calculateAverageStartingPrice() {
    const totalPrice = freelancers.reduce((prev, curr) => {
        return prev + curr.startingPrice;
    }, 0);

    const averagePrice = totalPrice / freelancers.length;
    priceValue.innerText = Math.floor(averagePrice);
}

function appendTabletoContainer(table) {
    const root = document.querySelector("#root");
    root.innerHTML = "";
    const h2 = document.createElement("h2");
    h2.innerText = "Available Freelancers";
    root.appendChild(h2);
    root.appendChild(table);
}

//update table and average dynamically
function updateTableAndAverage(newFreelancer) {
    freelancers.push(newFreelancer);
    const table = document.createElement("table");
    createTableHeader(table);
    const tbody = createTableBody(freelancers);
    table.appendChild(tbody);
    appendTabletoContainer(table);
    calculateAverageStartingPrice();
}

function simulatedNewFreelancer() {
    const intervalId = setInterval(() => {
        const newfreelancer = {
            name: "Billy",
            occupation: "Programmer",
            startingPrice: 70,
        };
        updateTableAndAverage(newfreelancer);
    }, 5000);

    return intervalId;
}

//render
function render(initialState) {
    const table = document.createElement("table");
    createTableHeader(table);
    const tbody = createTableBody(initialState);
    table.appendChild(tbody);
    appendTabletoContainer(table);
    calculateAverageStartingPrice();
    simulatedNewFreelancer();
}

render(freelancers);
