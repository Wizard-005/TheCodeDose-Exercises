const button = document.getElementById('save');

button.addEventListener('click',(event) => {
    event.target.textContent = 'Saved';
    event.target.style.backgroundColor = 'black';
})

document.addEventListener('DOMContentLoaded', function () {
    // Your existing accordion code
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const content = this.nextElementSibling;

            // Toggle the visibility of the content
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                // Arrow points upward when content is displayed
                this.querySelector('.arrow').style.transform = 'rotate(180deg)';
            } else {
                content.style.display = 'none';
                // Arrow points downward when content is hidden
                this.querySelector('.arrow').style.transform = 'rotate(0deg)';
            }

            // Toggle the "active" class for styling purposes
            this.classList.toggle('active');
        });
    });

    // Function for Tab Menu and Section
    function showContent(index) {
        const contents = document.querySelectorAll('.content');
        const tabButtons = document.querySelectorAll('.tab-btn');

        // Hide all content sections and remove "active" class from all tab buttons
        contents.forEach((content, i) => {
            content.classList.remove('active');
            tabButtons[i].classList.remove('active');
        });

        // Show the selected content section and add "active" class to the corresponding tab button
        contents[index].classList.add('active');
        tabButtons[index].classList.add('active'); // Change made here
    }

    // Show the first content by default
    showContent(0);

    // Attach click event listeners to tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            showContent(index);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', function () {
        // Check if the dropdown content is currently visible
        if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
            // If it's hidden, make it visible
            dropdownContent.style.display = 'block';
        } else {
            // If it's visible, hide it
            dropdownContent.style.display = 'none';
        }
    });
});


