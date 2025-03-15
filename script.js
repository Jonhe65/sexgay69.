window.onload = function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const gifContainer = document.getElementById("gifContainer");

    function moveNoButton() {
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerHeight - 50);

        noBtn.style.position = "absolute";  // Đảm bảo nút có thể di chuyển
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
    }

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);  // Né luôn khi bấm vào

    yesBtn.addEventListener("click", () => {
        gifContainer.style.display = "flex";
        gifContainerinnerHTML = '<img src="images/giphy.webp" alt="Cute GIF">';
        createHearts();
    });

    function createHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                let heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.classList.add("heart");
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 200);
        }
    }
};
