document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.getElementById('dropdown-btn');
    var dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#dropdown-btn')) {
            dropdownContent.classList.remove('active');
        }
    });
});
