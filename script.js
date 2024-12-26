// Player management
let players = [];
let currentPlayerIndex = 0;

// List of questions
const questions = [
    "Have you ever had a one-night stand?",
    "What's your most embarrassing sexy story?",
    "If you could hook up with anyone in this room, who would it be?",
    "What's the dirtiest thing you've ever said to someone?",
    "Can you name a famous porn star?",
    "Have you ever been to a strip club?",
    "Have you ever watched a celebrity sex tape?",
    "Have you ever hooked up with more than one person on the same night?",
    "What’s the naughtiest dream you’ve ever had?",
    "What’s the cringiest thing you’ve said during dirty talk?",
    "Do you like to, or would you want to watch adult movies with a partner?",
    "What’s a fantasy of yours that’s yet to happen?",
    "Have you performed a sexual act at work?",
    "Who was the worst performer out of everyone you've slept with?",
    "What are your favorite and least favorite positions?",
    "Have you ever fallen asleep during sex?",
    "Have you ever filmed yourself doing something intimate?",
    "Have you ever given or gotten a lap dance?",
    "How far have you gone sexually in public?",
    "Do you think you’re good in bed?",
    "How many sex toys do you own?",
    "Have you ever been in a secret relationship?",
    "Who was the last person you had sex with?",
    "Have you ever slept with more than one partner at the same time?",
    "Who was your first crush?",
    "What’s the worst thing you’ve done while drunk?",
    "What’s the biggest lie you’ve ever told?",
    "Who do you have a secret crush on?",
    "What’s something you’ve never told anyone?",
    "If you could change one thing about your past, what would it be?",
    "Do you believe in love at first sight?",
    "What’s your biggest fear in life?",
    "What's the weirdest thing you've ever eaten?",
    "Can you do any impressions? Show us!",
    "What’s the funniest thing that’s ever happened to you?",
    "Have you ever had a wardrobe malfunction?",
    "What would you do if you won the lottery?",
    "If you could be any animal for a day, which would you be?",
    "Have you ever been caught doing something you shouldn’t?",
    "What’s the most ridiculous thing you’ve ever Googled?",
    "What’s your favorite movie?",
    "If you could live anywhere, where would it be?",
    "What’s the most awkward thing that's ever happened to you?",
    "If you were stranded on a deserted island, what 3 things would you want with you?"
];

// Show Add Players screen
function showAddPlayers() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('addPlayersSection').style.display = 'block';
}

// Add a new player input field
document.getElementById('addPlayerBtn').addEventListener('click', () => {
    const playerInputs = document.getElementById('playerInputs');
    const currentCount = playerInputs.querySelectorAll('.player-name').length;
    if (currentCount < 10) {
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'player-name';
        newInput.placeholder = `Player ${currentCount + 1}`;
        playerInputs.appendChild(newInput);
    } else {
        alert('Maximum of 10 players allowed!');
    }
});

// Start the game and save player names
document.getElementById('startGameBtn').addEventListener('click', () => {
    const playerInputs = document.querySelectorAll('.player-name');
    players = Array.from(playerInputs)
        .map(input => input.value.trim())
        .filter(name => name !== '');
    
    if (players.length < 2) {
        alert('Please enter at least 2 players to start the game.');
    } else {
        document.getElementById('addPlayersSection').style.display = 'none';
        document.getElementById('categorySection').style.display = 'block';
        updateCurrentPlayer();
    }
});

// Update the current player display
function updateCurrentPlayer() {
    document.getElementById('currentPlayer').textContent = `Current Player: ${players[currentPlayerIndex]}`;
}

// Update the current player display
function updateCurrentPlayer() {
  document.getElementById('currentPlayer').textContent = `Current Player: ${players[currentPlayerIndex]}`;
}

// Draw a card and rotate to the next player
document.getElementById('drawCardBtn').addEventListener('click', () => {
  const cardText = document.getElementById('cardText');
  const loader = document.getElementById('loader');
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  const currentPlayer = players[currentPlayerIndex];

  // Show the loading icon and clear the card text
  loader.style.display = 'block';
  cardText.textContent = '';

  // After 5 seconds, display the question and hide the loading icon
  setTimeout(() => {
      loader.style.display = 'none';
      cardText.textContent = `${currentPlayer}, "${randomQuestion}"`;

      // Move to the next player
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      updateCurrentPlayer();
  }, 5000); // 5-second delay
});

// Exit to home
document.getElementById('exitBtn').addEventListener('click', () => {
    players = [];
    currentPlayerIndex = 0;
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('homeSection').style.display = 'block';
});