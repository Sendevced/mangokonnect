function showNotification() {
  const nameInput = document.querySelector('input[placeholder="Full Name"]');
  const emailInput = document.querySelector('input[placeholder="Email Address"]');
  const passwordInput = document.querySelector('input[placeholder="Password"]');
  const confirmInput = document.querySelector('input[placeholder="Confirm Password"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirm = confirmInput.value.trim();

  // Name validation
  if (name.length < 3) {
    alert("Full Name must be at least 3 characters.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Password validation (minimum 4 characters)
  if (password.length < 4) {
    alert("Password must be at least 4 characters.");
    return;
  }

  // Confirm password
  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  // Passed validation — show notification
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
    🎉 Welcome to Mango Konnect!<br>
    Your account has been created successfully.
    <button class="close-btn" onclick="this.parentElement.remove()">×</button>
  `;

  const container = document.getElementById("notifications");
  container.appendChild(notification);

  // Confetti effect
  const confettis = ["🎊","🎉","✨","🥳"];
  for (let i = 0; i < 5; i++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.textContent = confettis[Math.floor(Math.random() * confettis.length)];
    c.style.left = Math.random() * 260 + "px";
    notification.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }

  // Fade out after 4 seconds
  setTimeout(() => {
    notification.style.transition = "all 0.5s ease";
    notification.style.opacity = "0";
    notification.style.transform = "translateY(-20px)";
    setTimeout(() => notification.remove(), 500);
  }, 4000);

  // Auto redirect
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 4500);
}
