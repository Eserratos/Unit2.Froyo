// Prompt the user receives a list of flavors
// after opening the website separated by a comma.
const flavors = prompt(
    "please enter your list of flavor separeted by a comma.",
    "vanilla, vanilla, vanilla, strawberry, coffe, coffe");




// Split the string into an array based on commas and trim whitespace
let order = flavors ? flavors.split(',').map(flavor => flavor.trim()) : [];

// Function to count occurrences of each flavor
function countOrders(orderList) {
    const counts = {};
    orderList.forEach(flavor => {
        if (counts[flavor]) {
            counts[flavor]++;
        } else {
            counts[flavor] = 1;
        }
    });
    return counts;
}

// Get the counts and log them
const flavorCounts = countOrders(order);
console.log(flavorCounts);





