document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.collapsible-header');

    headers.forEach(header => {
        const content = header.nextElementSibling;

        // Initially set the content to be expanded
        content.style.maxHeight = "1000px";  // Set an arbitrary large value for max-height
        header.classList.add('expanded');

        header.addEventListener('click', function() {
            // Toggle the visibility of the content based on current state
            if (this.classList.contains('expanded')) {
                content.style.maxHeight = '0px'; // collapse
            } else {
                content.style.maxHeight = "1000px"; // Set an arbitrary large value for max-height when expanding
            }
            this.classList.toggle('expanded');
        });
    });
});
