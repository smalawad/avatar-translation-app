var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#translate");


var serverURL = "https://api.funtranslations.com/translate/navi.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler (error) {
    console.log("error occure", error);
    alert("something wrong with sever! try agin after some time");
}

function clickHandler() {
    var inputText = txtInput.value; //taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler)
