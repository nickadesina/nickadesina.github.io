document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.collapsible-header');

    headers.forEach(header => {
        const content = header.nextElementSibling;

        // Initially set the content to be expanded
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add('expanded');

        header.addEventListener('click', function() {
            // Toggle the visibility of the content based on current state
            if (this.classList.contains('expanded')) {
                content.style.maxHeight = '0px'; // collapse
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; // expand
            }
            this.classList.toggle('expanded');
        });
    });
});
