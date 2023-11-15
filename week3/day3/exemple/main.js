
// setTimeout(function(){
//     document.getElementById("parent").style.display = "block";
// }, 5000)

let countdown = document.getElementById("countdown");
  // Step 2. What function will change it each time?
  let countItDown = function() {
    let currentTime = parseFloat(countdown.textContent);
    if (currentTime > 0) {
       countdown.textContent = currentTime - 1;   
    } else {
        window.clearInterval(timer);
    }
    
  };

  // Step 3: Call that on an interval
  let timer = window.setInterval(countItDown, 1000);



