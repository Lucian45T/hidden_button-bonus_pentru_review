let onePush = 0;
let saved = 0;
let verify = 0;
function first() {
    let number = document.getElementById
        ('numberButtons').value
        if (onePush == 0) {
            for (let i = 1; i <= number; ++i) {
                ++saved;
                document.getElementById("numbersBott").innerHTML += `
                    <br>
                <div class = "container text-center">
                  <div class = "card">
                     <div class = "card-body">
                     <button class = "btn btn-success" id="${saved}"
                onclick = "push2('${saved}')">Push</button>
            </div>
        </div>
    </div> `;     
        }
        ++onePush;
    }
}
function push2 (elementId) {
    const chooseButton = Math.floor(Math.random()*(saved)) + 1;
    if (chooseButton == elementId && verify == 0) {
        document.getElementById(elementId).textContent = "Winner"; 
        ++verify;
    }
    if (chooseButton != elementId) {
    document.getElementById(elementId).textContent = "Loser"; 
    }
}
