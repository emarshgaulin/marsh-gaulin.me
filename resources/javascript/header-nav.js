function responsiveNavIcon() {
    const navBar = document.getElementById("nav-links");
    if (navBar.className ==="mobile-nav-hidden") {
        navBar.className = "mobile-nav-display";
    } else {
        navBar.className = "mobile-nav-hidden";
    }
}

/* const navIcon = document.querySelector("a.nav-menu-icon");
navIcon.addEventListener("click", responsiveNavIcon()); */
