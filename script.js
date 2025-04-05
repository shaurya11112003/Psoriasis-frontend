// ========= Form Validation (Basic) =========
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            const inputs = form.querySelectorAll("input[required], textarea[required]");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "2px solid red";
                    valid = false;
                } else {
                    input.style.border = "none";
                }
            });

            if (!valid) {
                e.preventDefault();
                alert("Please fill in all required fields.");
            }
        });
    });
});

// ========= Webcam Scan Function =========
function capture() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = "block";

    alert("Image captured. Ready to scan!");
    // Optional: send image to server or trigger scan
}

// ========= Toast/Popup Utility (Optional) =========
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ========= Example Toast Usage =========
// showToast("Logged in successfully!", "success");
