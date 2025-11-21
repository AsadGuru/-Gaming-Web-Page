document.addEventListener("scroll", () => {
    const imageBox = document.querySelector(".about-section .image-box");
    const rect = imageBox.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        imageBox.classList.add("fullscreen");
    } else {
        imageBox.classList.remove("fullscreen");
    }
});
