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




let isWidgetOpen = false;  // Track the state of the widget
let widgetLoaded = false;  // Track if the widget has been loaded

// Load widget script
(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '678bd6c822fbcb6ac6129aab' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
        });
        widgetLoaded = true;  // Mark widget as loaded
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');

// Toggle widget open/close when button is clicked
document.getElementById('get-started').addEventListener('click', function() {
    if (widgetLoaded) {
        if (isWidgetOpen) {
            window.voiceflow.chat.close();  // Close the widget
            isWidgetOpen = false;
        } else {
            window.voiceflow.chat.open();   // Open the widget
            isWidgetOpen = true;
        }
    } else {
        console.log("Widget is not yet loaded.");  // Just in case
    }
});
