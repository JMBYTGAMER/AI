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
