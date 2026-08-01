const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("message");
const chatMessages = document.getElementById("chatMessages");

sendButton.onclick = () => {

    const text = messageInput.value.trim();

    if(text==="") return;

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
