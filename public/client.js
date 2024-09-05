const socket = io();

// Event listener for random number generation
document.getElementById('generateRandom').addEventListener('click', () => {
    socket.emit('getRandomNumber');
});

// Receive random number from the server and display
socket.on('randomNumberGenerated', (number) => {
    document.getElementById('randomNumber').textContent = `Random Number: ${number}`;
});
