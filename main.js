
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-menu button");
    const sections = document.querySelectorAll(".details-section > div");

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            sections[index].scrollIntoView({
                behavior: "smooth",
                inline: "start"
            });

            
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
 