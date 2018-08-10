let p1, p2, scores, roundScore, activePlayer, gamePlaying;

init();


function rules(){
    // alert('\n\n\n\n\n')
    alert('GAME RULES:')
    alert('1. The game has 2 players, playing in rounds.')
    alert('2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.')
    alert('3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn.')
    alert('4. The player can choose to \'Hold\', which means that his ROUND score gets added to his GLBAL score. After that, it\'s the next player\'s turn.')
    alert('5. The first player to reach 100 points on GLOBAL score wins the game.')
    //let ans = confirm('Do You Agree')
    if(!confirm('Do You Agree?')){
        // rules();
        if(!confirm('Tab will be close. \nWant to Restart?.\n\tPress \'ok\' ')){
            window.top.close();
        }else{
            rules()
        }
    }else{
        p1 = prompt('Enter Player-1 Name')
        // document.querySelector('#name-0').textContent = 'p1';
        document.getElementById('name-0').innerHTML = p1;
        p2 = prompt('Enter Player-2 Name')
        document.getElementById('name-1').innerHTML = p2;
    }

}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    // By Adil Ansari ansariadil81@gmail.com
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    alert('Press \'Ok\' to see the RULES')
    rules();

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = p1;
    document.getElementById('name-1').textContent = p2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
// By Adil Ansari ansariadil81@gmail.com