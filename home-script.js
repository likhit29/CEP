const select = document.querySelectorAll(".select");
const caret = document.querySelectorAll(".caret");
const menu = document.querySelectorAll(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelectorAll(".selected");

select.forEach((s, index) => {
    s.addEventListener("click", () => {
        menu[index].classList.toggle("menu-open");
        caret[index].classList.toggle("caret-rotate"); // Rotate caret on click
    });
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        const parentSelect = option.closest('.main');
        const selectedText = parentSelect.querySelector('.selected');
        selectedText.innerHTML = option.textContent; // Set selected text
        menu.forEach(m => m.classList.remove("menu-open"));
        caret.forEach(c => c.classList.remove("caret-rotate")); // Reset caret rotation

        // Remove active class from all options
        options.forEach((opt) => opt.classList.remove("active"));
        // Add active class to the selected option
        option.classList.add("active");
    });
});

document.addEventListener("click", (e) => {
    if (![...select].some(s => s.contains(e.target)) && ![...menu].some(m => m.contains(e.target))) {
        menu.forEach(m => m.classList.remove("menu-open"));
        caret.forEach(c => c.classList.remove("caret-rotate")); // Reset caret rotation
    }
});