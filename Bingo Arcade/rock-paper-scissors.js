//The function adds an event listener to each of the buttons that starts the round 
        //Also it takes in for later use on what object the player clicked on and is going to use
        const btn = document.querySelectorAll('#hover');
        btn.forEach((button) => {
          button.addEventListener('click', () => {
            x = button.className;
            playRound(x, computerPlay()); 
          }) 
        });
        
        //The function below shows what the computer will use in the Rock, Paper, Scissors match 
        function computerPlay() {
          let option = Math.floor(Math.random() * 2.5 + 1);
          if(option == 1) {
            return "Rock";
          } else if(option == 2) {
            return "Paper";
          } else {
            return "Scissors";
          };
        }

        //These variables is the main support of every single line of Javascript code for this project
        //The variables tells the computer when to turn off all interactivity from Javascript 
        let limit = 0; 
        let winCondition = 0;
        let winCondition1 = 0;

        //The lines below displays the winner of each round and the points that the users have
        
        //variables for the display of who won
        let logContainer = document.querySelector('.convo');
        let content = document.createElement('p');
        //

        //Variables used to display the points that the player has starting from 0
        let playerScore = 0;
        let playerSelection;
        let playerContainer = document.querySelector('.playerScore');
        let playerPt = document.createElement('p');
        playerPt.classList.add('scores');
        playerPt.textContent = 0;
        playerContainer.appendChild(playerPt);
        //

        //Variables used to display the points that the computer has starting from 0
        let computerScore = 0;
        let computerSelection;
        let computerContainer = document.querySelector('.computerScore'); 
        let computerPt = document.createElement('p');
        computerPt.classList.add('scores'); 
        computerPt.textContent = 0;
        computerContainer.appendChild(computerPt);
        //

        function playRound(playerSelection, computerSelection) {
          //Displays the objects picked by the player and the computer
          document.getElementById('PlayerObject').className = '';
          document.getElementById('ComputerObject').className = '';
          //

          //If the player picked 'Rock'
          if(playerSelection == "Rock" && computerSelection == "Scissors" && limit === 0) {
            content.textContent = "You win, Rock beats Scissors!";
            logContainer.appendChild(content); 
            document.getElementById('PlayerObject').classList.add('Rock'); 
            document.getElementById('ComputerObject').classList.add('Scissors'); 
      
            playerScore++; 
            playerPt.textContent = playerScore;
            playerContainer.appendChild(playerPt);

          } else if(playerSelection == "Rock" && computerSelection == "Paper" && limit === 0) {
              content.textContent = "You lose, Paper beats Rock";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Rock'); 
              document.getElementById('ComputerObject').classList.add('Paper'); 

              computerScore++;
              computerPt.textContent = computerScore;
              computerContainer.appendChild(computerPt);

          } else if(playerSelection == "Rock" && computerSelection == "Rock" && limit === 0) {
              content.textContent = "It's a draw, you both picked Rock";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Rock'); 
              document.getElementById('ComputerObject').classList.add('Rock'); 
          }

          //If the player picked 'Paper'
          if(playerSelection == "Paper" && computerSelection == "Rock" && limit === 0) {
            content.textContent = "You win, Paper beats Rock!";
            logContainer.appendChild(content);
            document.getElementById('PlayerObject').classList.add('Paper'); 
            document.getElementById('ComputerObject').classList.add('Rock'); 

            playerScore++; 
            playerPt.textContent = playerScore;
            playerContainer.appendChild(playerPt);

          } else if(playerSelection == "Paper" && computerSelection == "Scissors" && limit === 0) {
              content.textContent = "You lose, Scissors beats Paper";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Paper'); 
              document.getElementById('ComputerObject').classList.add('Scissors'); 

              computerScore++; 
              computerPt.textContent = computerScore;
              computerContainer.appendChild(computerPt);

          } else if(playerSelection == "Paper" && computerSelection == "Paper" && limit === 0) {
              content.textContent = "It's a draw, you both picked Paper";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Paper'); 
              document.getElementById('ComputerObject').classList.add('Paper'); 

          //If the player picked 'Scissors'
          }if(playerSelection == "Scissors" && computerSelection == "Paper" && limit === 0) {
            content.textContent = "You win, Scissors beats Paper!";
            logContainer.appendChild(content);
            document.getElementById('PlayerObject').classList.add('Scissors'); 
            document.getElementById('ComputerObject').classList.add('Paper'); 

            playerScore++; 
            playerPt.textContent = playerScore;
            playerContainer.appendChild(playerPt);

          } else if(playerSelection == "Scissors" && computerSelection == "Rock" && limit === 0) {
              content.textContent = "You lose, Rock beats Scissors";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Scissors'); 
              document.getElementById('ComputerObject').classList.add('Rock'); 
              
              computerScore++;
              computerPt.textContent = computerScore;
              computerContainer.appendChild(computerPt);
    
          } else if(playerSelection == "Scissors" && computerSelection == "Scissors" && limit === 0) {
              content.textContent = "It's a draw, you both picked Scissors";
              logContainer.appendChild(content);
              document.getElementById('PlayerObject').classList.add('Scissors'); 
              document.getElementById('ComputerObject').classList.add('Scissors'); 
          }
          
          //The lines below activates when someone wins the game 
          //Also disabling all interactivity and showing the retry game button

          //Variables for the button to reload the page
            let buttonToReloadPage = document.createElement('a');
            buttonToReloadPage.classList.add('ReloadButton'); 
            buttonToReloadPage.textContent = "Back to Main"
            buttonToReloadPage.href = "./index.html"
          //

          if(playerScore >= 5 && winCondition1 === 0) {
            content.textContent = "Congratulations, you beated the computer!";
            logContainer.appendChild(content);
            logContainer.appendChild(buttonToReloadPage);
            window.playerMarks[window.curCell - 1] = 1;
            winCondition++;
            limit++; 

            //Removes the animation for the buttons
            document.getElementById('hover').id = ''; 
            document.getElementById('hover').id = ''; 
            document.getElementById('hover').id = ''; 
          } else if(computerScore >= 5 && winCondition === 0) {
            content.textContent = "The computer beated you, try again?";
            logContainer.appendChild(content); 
            logContainer.appendChild(buttonToReloadPage);
            winCondition1++; 
            limit++; 

            //Removes the animation for the buttons
            document.getElementById('hover').id = ''; 
            document.getElementById('hover').id = ''; 
            document.getElementById('hover').id = ''; 
          }
        } 