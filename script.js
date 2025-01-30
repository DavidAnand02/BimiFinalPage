document.addEventListener("DOMContentLoaded", function () {
    // FAQ Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector("h3");
        const answers = item.querySelectorAll("p"); // Supports multiple paragraphs

        // Ensure answers are initially hidden
        answers.forEach(answer => answer.style.display = "none");

        question.addEventListener("click", () => {
            const isVisible = item.classList.contains("active");
            
            // Toggle the active state
            if (isVisible) {
                item.classList.remove("active");
                answers.forEach(answer => answer.style.display = "none");
            } else {
                item.classList.add("active");
                answers.forEach(answer => answer.style.display = "block");
            }
        });
    });

    // Add search functionality (for demonstration purposes)
    const searchButton = document.getElementById("search-button");
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            alert("Search functionality is not yet implemented.");
        });
    }
});
