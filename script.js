// Quiz system
let score = 0;
let answered = {};

// Check selected answer
function answer(q, correct, btn) {
    if (answered[q]) return;
    answered[q] = true;

    let buttons = btn.parentElement.querySelectorAll("button");

    buttons.forEach(function(b) {
        b.classList.remove("selected", "correct", "wrong");
    });

    btn.classList.add("selected");

    if (correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }
}

// Show final score
function showScore() {
    alert("You scored " + score + " out of 3");
}

// Scroll to top button
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollTopPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Form validation
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Required";
        valid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Email validation
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Enter a message";
        valid = false;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    // Success message
    if (valid) {
        alert("Message sent successfully!");
    }
});