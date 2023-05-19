let content = document.getElementById("content");
let author = document.getElementById("author");


const quote = () =>{
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        content.innerText = '" '+result.content+' "';
        author.innerText = result.author;
    })
}

const sound = () =>{
    let speech = new SpeechSynthesisUtterance(`${content.innerText} by ${author.innerText}`);
    speechSynthesis.speak(speech);
}