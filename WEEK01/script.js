
function loadPage(){
  let button = document.getElementById('submit');
  button.addEventListener('click', buttonClicked);
}

let wordArray = [];

function buttonClicked(){


  // let t1Content = document.createTextNode("This is a test");

  // here we retrive the value of the text input box
  let userInput = document.getElementById("userInput").value;
  // and here we clear out the box so it's empty again!
  document.getElementById("userInput").value = "";

  wordArray.push(userInput);
  console.log(wordArray);

  if(wordArray.length > 1){
    // here we write a word to the document body by using a paragaph <p> tag
    let t1 = document.createElement("p");
    console.log(wordArray.length)
    t1.innerHTML = wordArray[wordArray.length - 2];
    // t1.innerHTML = "TEST IF STATEMENT";
    document.body.appendChild(t1);
  }

}

window.addEventListener("load",loadPage);
