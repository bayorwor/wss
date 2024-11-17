const socket = io("ws://localhost:8000");

const sendMessage = (e) => {
  e.preventDefault();

  const input = document.querySelector("input");

  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }

  input.focus();
};

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages

socket.on("message", (data) => {
  const ul = document.querySelector("ul");
  ul.innerHTML += `<li>${data}</li>`;
});
