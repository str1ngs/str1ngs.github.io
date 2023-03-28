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

