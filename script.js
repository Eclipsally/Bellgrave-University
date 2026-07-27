const filterButtons = document.querySelectorAll(".filter-button");
const facultyCards = document.querySelectorAll(".faculty-card");
if (filterButtons.length > 0) {
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        facultyCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
}