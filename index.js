//starting freelancers
const freelancers = [
    {name: 'Alice', occupation: 'Writer', startingPrice: 30},
    {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
    {name: 'Carol', occupation: 'Programmer', startingPrice: 70}
    ];
    //create function that calculates starting price
    function calculateAveragePrice() {
        const totalPrice = freelancers.reduce((sum, freelancer)=> sum + startingPrice, 0);
        const averagePrice = totalPrice / freelancers.length || 0;
        return averagePrice.toFixed(2); // Limit to two decimals
    }
    //function to update html with current list of freelancers
    function updateFreelancersList() {
        const freelancerListElement = document.getElementById('freelancer-list');
        const averagePriceElement = document.getElementById('average-price');
    }
    
    //clear the current list
     freelancerListElement.innerHTML = '';
    
     //create new list with each freelancer
     freelancers.forEach(freelancer => {
         const listItem = document.createElement('li');
         listItem.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
         freelancerListElement.appendChild(listItem);
     });
    
     // Update the sum price
     const averagePrice = calculateAveragePrice();
     averagePriceElement.textContent = `Average starting price: $${averagePrice}`;
    
    
    //create function to add new freelancers
    function addFreelancer(name, occupation, startingPrice) {
     const newFreelancer = { name, occupation, startingPrice };
     freelancers.push(newFreelancer);
     updateFreelancerList();
    }
    
    //use setInterval to allow new freelancers to appear every few seconds
    setInterval(() => {
     const newFreelancerName = prompt('Enter name of the freelancer:');
     const newFreelancerOccupation = prompt('Enter occupation:');
     const newFreelancerStartingPrice = parseFloat(prompt('Enter the starting price:'));
     
     addFreelancer(newFreelancerName, newFreelancerOccupation, newFreelancerStartingPrice);
    }, 5000); //update freelancer list every 5 seconds
    
    updateFreelancerList();