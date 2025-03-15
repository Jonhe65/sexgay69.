window.onload = function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const gifContainer = document.getElementById("gifContainer");

    function moveNoButton() {
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";  
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
    }

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);  

    yesBtn.addEventListener("click", () => {
        gifContainer.style.display = "flex";

        // Chỉ thêm GIF nếu chưa có
        if (!gifContainer.querySelector("img")) {
            gifContainer.innerHTML = '<img src="images/giphy.webp" alt="Cute GIF">';
        }

        startHeartAnimation(); // Kích hoạt hiệu ứng trái tim
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 

        document.body.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }

    // Hàm này đảm bảo hiệu ứng trái tim chỉ chạy 1 lần và không bị trùng lặp
    let heartInterval = null;
    function startHeartAnimation() {
        if (!heartInterval) {
            heartInterval = setInterval(createHeart, 500);
        }
    }
};
