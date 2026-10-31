// =================================
// 1. TYPING ANIMATION
// =================================

const roles = [
"Frontend Developer",
"Web Developer",
"Java Programmer",
"Tech Enthusiast"
];

const roleElement = document.querySelector(".home-content h2");

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

```
const currentRole = roles[roleIndex];

if (!deleting) {

    roleElement.textContent =
        currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeAnimation, 1200);
        return;
    }

} else {

    roleElement.textContent =
        currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

}

setTimeout(typeAnimation, deleting ? 50 : 100);
```

}

if (roleElement) {
typeAnimation();
}

// =================================
// 2. SCROLL REVEAL ANIMATION
// =================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

```
entries.forEach((entry) => {

    if (entry.isIntersecting) {

        entry.target.classList.add("show");

    }

});
```

}, {
threshold: 0.15
});

sections.forEach((section) => {
observer.observe(section);
});

// =================================
// 3. ACTIVE NAVBAR
// =================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

```
let currentSection = "";

document.querySelectorAll("section[id]").forEach((section) => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
    }

});

navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
    }

});
```

});

// =================================
// 4. BACK TO TOP BUTTON
// =================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

```
if (window.scrollY > 300) {
    topButton.classList.add("visible");
} else {
    topButton.classList.remove("visible");
}
```

});

topButton.addEventListener("click", () => {

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

});

// =================================
// 5. CURRENT YEAR
// =================================

const footer = document.querySelector("footer p");

if (footer) {
footer.textContent =
`© ${new Date().getFullYear()} Aditya Raj. All Rights Reserved.`;
}

console.log("Portfolio JavaScript Loaded Successfully!");
