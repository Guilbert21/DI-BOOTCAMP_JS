setTimeout(alertHello, 2000)

function alertHello(){
    alert("Hello World")
}

function addParagraph(){
    const p =  document.createElement("p")
    p.textContent = "Hello World"
    const container = document.getElementById("container")
    if (container.children.length < 5){
    container.appendChild(p)
    }else {
        clearParagraphInterval()

    }
}


const button = document.getElementById("clear")
button.addEventListener("click", clearParagraphInterval)

function clearParagraphInterval(){
    clearInterval(interval)
}