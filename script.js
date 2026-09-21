/* =====================================================
   MENU HP
===================================================== */

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  navLinks.classList.toggle("show");
}

/* =====================================================
   TUTUP MENU SETELAH LINK DIKLIK
===================================================== */

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});

/* =====================================================
   ANIMASI SAAT SCROLL
===================================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

/* =====================================================
   JALANKAN ANIMASI SAAT SCROLL
===================================================== */

window.addEventListener("scroll", revealOnScroll);

/* =====================================================
   JALANKAN SAAT HALAMAN DIBUKA
===================================================== */

revealOnScroll();
