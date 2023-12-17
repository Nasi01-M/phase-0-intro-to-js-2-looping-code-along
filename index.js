// Code your solutions in this file
// Function to create thank you cards
function writeCards(names, event) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  // Example usage of writeCards function
  const thankYouCards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouCards);
  
  // Function to count down from a given number
  function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  // Example usage of countDown function
  countDown(10);
  