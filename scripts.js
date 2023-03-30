var count = 1;

function plus() {
    count = count +1;
    document.getElementById("counter").innerHTML = count;
}


function minus() {
    count--;
    document.getElementById("counter").innerHTML = count;
}


function reset() {
    count = 1;
    document.getElementById("counter").innerHTML = count;
}

function lisa_kaart() {
    
    var title = document.getElementById("title-input").value;
    var text = document.getElementById("text-input").value;


    var cardHTML = `
    <div class="card" style="order: -1;">
    <img class="card-img-top" src="Pildid/Goku.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Rohkem infot
         </button>
    </div>
    `;
  
    var cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML += cardHTML;
  }

  var player = "X"; // Kes on esimene?
  var tiles = document.getElementsByTagName("td"); 
  var gameBoard = ["", "", "", "", "", "", "", "", ""]; 
  
  // Valitud kasti lisame X või O
  function MakeMove(pos) {
      if(gameBoard[pos].length == 0) {
          tiles[pos].innerHTML = player;
          gameBoard[pos] = player;  
          CheckWinner();
          if(player == "X") {
              tiles[pos].classList.add("tileX");
              player = "O";
          } else {
              player = "X";
              tiles[pos].classList.add("tileO");
          }
          document.getElementById("player").innerHTML = player;
      }
  }
  
  function CheckWinner() {
      if(gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && gameBoard[0] != "") {
          WinnerIs(player, 0, 1, 2);
      } else if(gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5] && gameBoard[3] != "") {
          WinnerIs(player, 3, 4, 5);
      } else if(gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8] && gameBoard[6] != "") {
          WinnerIs(player, 6, 7, 8);
      } else if(gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6] && gameBoard[0] != "") {
          WinnerIs(player, 0, 3, 6);
      } else if(gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7] && gameBoard[1] != "") {
          WinnerIs(player, 1, 4, 7);
      } else if(gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8] && gameBoard[2] != "") {
          WinnerIs(player, 2, 5, 8);
      } else if(gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8] && gameBoard[0] != "") {
          WinnerIs(player, 0, 4, 8);
      } else if(gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6] && gameBoard[2] != "") {
          WinnerIs(player, 2, 4, 6);
      } else if(gameBoard.indexOf("") == -1) { // Siis kui kõik on täis. Otsi kindlat String meie Array-st ja tagasta selle asukoht
          NoWinner();
      }
  }
  
  
  for(let i = 0; i < tiles.length; i++) { // Loop all elements.
      tiles[i].addEventListener('click', function() {
          MakeMove(i);
      });
  }
