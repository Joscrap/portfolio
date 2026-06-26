
const btn = document.getElementById("like-btn");

btn.addEventListener("click", () => {
    const float = document.createElement("div");
    float.classList.add("like-float");
    const emojis = ["❤️"];
    float.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    document.body.appendChild(float);

    setTimeout(() => {
        float.remove();
    }, 1000);
});

