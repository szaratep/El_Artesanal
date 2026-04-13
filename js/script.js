const menuBtn = document.getElementById("menuBtn");
const listMenu = document.getElementById("list_menu");
const items = listMenu.querySelectorAll(".list_item");
const links = listMenu.querySelectorAll("a");

function closeMenu() {
    listMenu.classList.remove("active");
    items.forEach(item => item.classList.remove("active"));
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    listMenu.classList.toggle("active");
    const isOpen = listMenu.classList.contains("active");

    items.forEach(item => {
        if (isOpen) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    menuBtn.innerHTML = isOpen ? "X" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

links.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (e) => {
    if (!listMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

let modal = document.getElementById('filter_dialog');

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close()
})