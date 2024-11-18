const socket = io("ws://localhost:8000");

const activity = document.querySelector(".activity");
const msgInput = document.querySelector("input");

const sendMessage = (e) => {
  e.preventDefault();

  if (msgInput.value) {
    socket.emit("message", msgInput.value);
    msgInput.value = "";
  }

  msgInput.focus();
};

document.querySelector("form").addEventListener("submit", sendMessage);

// Listen for messages

socket.on("message", (data) => {
  activity.textContent = "";
  const ul = document.querySelector("ul");
  ul.innerHTML += `<li>${data}</li>`;
});

msgInput.addEventListener("keypress", () => {
  socket.emit("activity", socket.id.substring(0, 5));
});

// Listen for typing
let activityTimer;

socket.on("activity", (data) => {
  activity.textContent = `${data} is typing...`;

  clearTimeout(activityTimer);

  activityTimer = setTimeout(() => {
    activity.textContent = "";
  }, 3000);
});
