// smooth.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      // ambil id tujuan
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // jika target ada dan href tidak hanya #
      if (targetElement && targetId !== "#") {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
