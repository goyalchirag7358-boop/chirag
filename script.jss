// ================================
// 1. Welcome Message (Dynamic)
// ================================
function showWelcome() {
    const name = "Chirag Goyal";
    document.getElementById("welcome").innerText =
        `Welcome to ${name}'s Portfolio 🚀`;
}


// ================================
// 2. Dark Mode Toggle
// ================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


// ================================
// 3. Skills Progress Animation
// ================================
function loadSkills() {
    let skills = document.querySelectorAll(".progress-bar");

    skills.forEach(skill => {
        let value = skill.getAttribute("data-skill");
        skill.style.width = value + "%";
        skill.innerText = value + "%";
    });
}


// ================================
// 4. Contact Form Validation
// ================================
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// ================================
// 5. Real-Time Clock Feature
// ================================
function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

// Update time every second
setInterval(showTime, 1000);


// ================================
// 6. Event Listener Example
// ================================
document.addEventListener("DOMContentLoaded", function () {
    showWelcome();
    loadSkills();
});