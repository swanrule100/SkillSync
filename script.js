// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
});

// Add task functionality
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "1rem";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Ensure the DOM is loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const statusMessage = document.getElementById("formStatus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/hansrajgovjob@gmail.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          statusMessage.textContent = "Message sent successfully!";
          statusMessage.style.color = "green";
          form.reset();
        } else {
          statusMessage.textContent = "Something went wrong. Please try again.";
          statusMessage.style.color = "red";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        statusMessage.textContent =
          "An error occurred. Please try again later.";
        statusMessage.style.color = "red";
      });
  });
});
