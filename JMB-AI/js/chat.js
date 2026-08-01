const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("message");
const chatMessages = document.getElementById("chatMessages");

let chats = JSON.parse(localStorage.getItem("jmb_chats")) || [];

sendButton.onclick = () => {

    chats.push({

    sender:"user",

    message:text,

    time:new Date().toLocaleTimeString()

});

saveChats();

    chatMessages.innerHTML += `
<div class="user-message">
${text}
</div>
`;

chatMessages.scrollTop = chatMessages.scrollHeight;

    messageInput.value = "";

};

messageInput.addEventListener("keypress",(event)=>{

    if(event.key==="Enter"){

        sendButton.click();

    }

});

const typing = document.createElement("div");

typing.className = "ai-message";

typing.id = "typing";

typing.innerHTML = "🤖 JMB AI is typing...";

chatMessages.appendChild(typing);

chatMessages.scrollTop = chatMessages.scrollHeight;

function saveChats(){

    localStorage.setItem(
        "jmb_chats",
        JSON.stringify(chats)
    );

}
