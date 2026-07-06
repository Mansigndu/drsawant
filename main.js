// ===============================
// WAIT UNTIL NAV IS LOADED
// ===============================

window.addEventListener("load", initNavbar);

function initNavbar() {

    // ===============================
    // NAVBAR ELEMENTS
    // ===============================

    const mainNavbar = document.getElementById("mainNavbar");
    const menuBtn = document.getElementById("menuBtn");
    const closeMenu = document.getElementById("closeMenu");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");
    const mobileLinks = document.querySelectorAll("#mobileMenu a");

    const navLogo = document.querySelector("#mainNavbar img");
    const menuIcon = menuBtn?.querySelector("i");

    // ===============================
    // STATE
    // ===============================

    let isMenuOpen = false;
    let lastScroll = 0;

    // ===============================
    // OPEN MENU
    // ===============================

    function openMenu() {
        mobileMenu.style.right = "0";
        overlay.classList.remove("hidden");
        isMenuOpen = true;

        menuIcon?.classList.remove("fa-bars");
        menuIcon?.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";
    }

    // ===============================
    // CLOSE MENU
    // ===============================

    function closeMobileMenu() {
        mobileMenu.style.right = "-100%";
        overlay.classList.add("hidden");
        isMenuOpen = false;

        menuIcon?.classList.remove("fa-xmark");
        menuIcon?.classList.add("fa-bars");

        document.body.style.overflow = "";
    }

    // ===============================
    // TOGGLE MENU
    // ===============================

    menuBtn?.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMobileMenu();
        } else {
            openMenu();
        }
    });

    closeMenu?.addEventListener("click", closeMobileMenu);
    overlay?.addEventListener("click", closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMobileMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });

    // ===============================
    // ACTIVE PAGE LINK
    // ===============================

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("text-[#0B5D8C]", "font-semibold");
        }
    });

    // ===============================
    // SCROLL EFFECTS (SINGLE HANDLER)
    // ===============================

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        // CLOSE MENU ON SCROLL (ONLY IF OPEN)
        if (isMenuOpen) {
            closeMobileMenu();
        }

        // ===========================
        // GLASS EFFECT
        // ===========================

        if (currentScroll > 40) {
            mainNavbar.classList.add(
                "bg-white/90",
                "backdrop-blur-xl",
                "shadow-xl"
            );
            mainNavbar.classList.remove("bg-transparent");
        } else {
            mainNavbar.classList.remove(
                "bg-white/90",
                "backdrop-blur-xl",
                "shadow-xl"
            );
        }

        // ===========================
        // HIDE / SHOW NAVBAR
        // ===========================

        if (currentScroll <= 10) {
            mainNavbar.style.transform = "translateY(0)";
        } else if (currentScroll > lastScroll) {
            mainNavbar.style.transform = "translateY(-100%)";
        } else {
            mainNavbar.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;

        // ===========================
        // LOGO RESIZE
        // ===========================

        if (currentScroll > 80) {
            navLogo?.classList.remove("w-14", "h-14", "lg:w-16", "lg:h-16");
            navLogo?.classList.add("w-12", "h-12", "lg:w-14", "lg:h-14");
        } else {
            navLogo?.classList.add("w-14", "h-14", "lg:w-16", "lg:h-16");
            navLogo?.classList.remove("w-12", "h-12", "lg:w-14", "lg:h-14");
        }
    });

    // ===============================
    // SMOOTH NAVBAR ENTRY
    // ===============================

    mainNavbar.style.opacity = "0";
    mainNavbar.style.transform = "translateY(-40px)";

    setTimeout(() => {
        mainNavbar.style.transition = "all .7s ease";
        mainNavbar.style.opacity = "1";
        mainNavbar.style.transform = "translateY(0)";
    }, 150);

    // ===============================
    // BUTTON HOVER EFFECT
    // ===============================

    document.querySelectorAll("#mainNavbar .rounded-full").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.classList.add("scale-105");
        });

        btn.addEventListener("mouseleave", () => {
            btn.classList.remove("scale-105");
        });
    });
}