document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('a-box');
    const userInfoDiv = document.getElementById('userInfo');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const role = box.getAttribute('info');
            let userName = prompt(`Enter your name as a ${role}`);
            let age = prompt("Enter your age");
            let hobbies = prompt("Enter your hobbies");

            // Display user info
            if (userName && age && hobbies) {
                userInfoDiv.innerHTML = `<p>${role.charAt(0).toUpperCase() + role.slice(1)}: ${userName}, Age: ${age}, Hobbies: ${hobbies}</p>`;
            }
        });
    });
});