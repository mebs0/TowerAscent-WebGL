// This function is called from Unity to trigger speech synthesis
function SpeakText(text) {
    if ('speechSynthesis' in window) {
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    } else {
        console.log("Speech synthesis not supported.");
    }
}
