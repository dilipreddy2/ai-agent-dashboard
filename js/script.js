/* ========================================
   AI AGENT DASHBOARD
   COMMON JAVASCRIPT
======================================== */


/* ---------- THEME TOGGLE ---------- */

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("light-mode")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }
}


/* ---------- PAGE LOADED ---------- */

document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Agent Dashboard loaded successfully.");

});