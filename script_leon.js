let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");
if (boutonLike) {
boutonLike.addEventListener("click", () => {
nbLikes = nbLikes + 1;
boutonLike.textContent = "❤ J'aime " + nbLikes;
});
}
const btn = document.getElementById("like-btn");

btn.addEventListener("click", () => {
    const float = document.createElement("div");
    float.classList.add("like-float");

    // Choix d’emojis façon Twitch
    const emojis = ["❤️"];
    float.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    document.body.appendChild(float);

    setTimeout(() => {
        float.remove();
    }, 1000);
});
