const buttons = document.querySelectorAll(".btn button");
const projects = document.querySelectorAll(".projet");

const setActiveButton = (target) => {
    buttons.forEach(btn => btn.classList.toggle('active', btn === target));
};

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        setActiveButton(event.target);
        const text = event.target.textContent;
        filterProjects(text);
    });
});

const filterProjects = (text) => {
    projects.forEach((project) => {
        const skills = project.getAttribute("data-skills").split(",");
        let trouve = false;
        for (let skill of skills) {
            if (skill === text) {
                trouve = true;
            }
        }
        if (trouve || text === "Tous") {
            project.style.display = "flex";
        } else {
            project.style.display = "none";
        }
    });
};