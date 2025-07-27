document.addEventListener("DOMContentLoaded", function() {
    
    const inputBox = document.getElementById("inputBox");
    const sendBtn = document.getElementById("sendBtn");
    const outputBox = document.getElementById("outputBox");


    sendBtn.addEventListener("click", function() {
        const menssage = inputBox.value;
        outputBox.textContent = menssage;
        


    });


});