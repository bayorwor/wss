const socket = new WebSocket("ws://localhost:3000");

const sendMessage = (e) => {
  e.preventDefault();

  const input = document.querySelector("input");

  if (input.value) {
    socket.send(input.value);
    input.value = "";
  }

  input.focus();
};

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages

socket.addEventListener("message", (message) => {
  const ul = document.querySelector("ul");
  ul.innerHTML += `<li>${message.data}</li>`;
});
