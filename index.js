const joke = document.querySelector("#header");
const content = document.querySelector("#content");


function getjoke(){

    fetch("https://api.blablagues.net/?rub=blagues")
      .then((res) =>res.json())
      .then((data) => {
        const jokeText = data.data.content
        console.log(jokeText)
        joke.innerHTML = jokeText.text_head
        if (jokeText.text_hidden != ""){
            content.innerHTML = jokeText.text_hidden
        }
        else{
            content.innerHTML = jokeText.text
        }
      });
      
}
getjoke()

document.body.addEventListener("click", getjoke)



  