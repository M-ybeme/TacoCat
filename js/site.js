//control function
function getValue() {
    let message = document.getElementById("message").value;
    let revMessage = reverse(message);
    displayMessage(message, revMessage);
}


//buisness logic
function reverse(message) {

    //string an array of characters  with index and values
    let reversedMesssage = "";

    //decrementing for loop
    for (let index = message.length-1; index >= 0; index--) {

        reversedMesssage += message[index];
    }
    return reversedMesssage;
}

function displayMessage(message, revMessage) {

    let div= document.createElement("div")
    
    let newMessage = message.replace(/\s/g, "");
    let newRevMessage = revMessage.replace(/\s/g, "");

        if(newMessage.toLowerCase() === newRevMessage.toLowerCase()){
        
            results.innerHTML = "Yes, This is a palindrome.";
            results.classList.add("success");
        
        } else {
        
            results.innerHTML = "No, This is not a palindrome.";
            results.classList.add("fail");
    }
    results.appendChild(div);
        
}