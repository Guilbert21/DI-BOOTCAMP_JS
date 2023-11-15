const button = getButton()
const shuffleButton = document.getElementById("shuffle")
button?.addEventListener("click", handleClick)
shuffleButton?.addEventListener("click", shuffleStory)

function getFormValue(){
const noun = document.getElementById("noun").value
const adjective = document.getElementById("adjective").value
const person = document.getElementById("person").value
const verb = document.getElementById("verb").value
const place = document.getElementById("place").value
return {
  noun: noun,
  adjective: adjective,
  person: person,
  verb: verb,
  place: place
}
}

function handleClick(e){
  e.preventDefault()
  const formValue = getFormValue()
  const noun = formValue.noun
  const adjective = formValue.adjective
  const person = formValue.person
  const verb = formValue.verb
  const place = formValue.place

if (noun == "" || adjective == "" || person == "" || verb == "" || place == "") return

const story = writeStory(noun, adjective, person, verb, place)
console.log("story", story)

appendStoryToPage(story)
}

function shuffleStory(){
  const formValue = getFormValue()
  const noun = formValue.noun
  const adjective = formValue.adjective
  const person = formValue.person
  const verb = formValue.verb
  const place = formValue.place

  let story
  const randomNumber = generateRandomNumer()
  if (randomNumber===1){
    story = writeStory(noun, adjective, person, verb, place)
  }else if (randomNumber===2){
  story = writeStory2(noun, adjective, person, verb, place)
} else {
  story = writeStory3(noun, adjective, person, verb, place)
}
appendStoryToPage(story)
}

function generateRandomNumer(){
  return Math.floor(Math.random()*3) + 1
}


function appendStoryToPage(story){
  const para = document.getElementById("story")
  const span = document.createElement("span")
  span.innerText = story
  para.textContent = ""
  para.appendChild(span)
}

function writeStory(noun, adjective, person, verb, place){
return " i like to look at ${noun}, i think that they are ${adjective}. my favouriteperson is ${person} we often ${verb} together when we are in ${place} "
}

function writeStory2(noun, adjective, person, verb, place){
  return " i like t ${noun}, i think  ${adjective},person is ${person} we  ${verb} together ${place} "

}

function writeStory3(noun, adjective, person, verb, place){
  return " this ${noun}, think ${adjective}, because ${person} ${verb} in ${place} "
}

function getButton() {
  return document.getElementById("lib-btton")
}






