document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     YEAR
  ===================================================== */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =====================================================
     HEADER
  ===================================================== */

  const header = document.getElementById("header");

  const updateHeader = () => {

    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };

  updateHeader();

  window.addEventListener("scroll", updateHeader);


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mobileMenu.classList.toggle("active");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });


    mobileMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =====================================================
     FAQ
  ===================================================== */

  const faqQuestions =
    document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

      const item =
        question.closest(".faq-item");

      if (!item) return;

      const wasActive =
        item.classList.contains("active");


      document
        .querySelectorAll(".faq-item")
        .forEach(other => {

          other.classList.remove("active");

          const icon =
            other.querySelector(".faq-icon");

          if (icon) {
            icon.textContent = "+";
          }

        });


      if (!wasActive) {

        item.classList.add("active");

        const icon =
          item.querySelector(".faq-icon");

        if (icon) {
          icon.textContent = "−";
        }

      }

    });

  });


  /* =====================================================
     CONTACT FORM
  ===================================================== */

  const form =
    document.getElementById("quoteForm");

  const status =
    document.getElementById("formStatus");


  if (form && status) {

    form.addEventListener("submit", event => {

      event.preventDefault();


      const name =
        document.getElementById("name").value.trim();

      const email =
        document.getElementById("email").value.trim();

      const message =
        document.getElementById("message").value.trim();


      status.className = "form-status";


      if (!name || !email || !message) {

        status.textContent =
          "Please complete your name, email and message.";

        status.classList.add("error");

        return;

      }


      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!emailPattern.test(email)) {

        status.textContent =
          "Please enter a valid email address.";

        status.classList.add("error");

        return;

      }


      status.textContent =
        "Thanks! Your enquiry has been prepared successfully.";

      status.classList.add("success");

      form.reset();

    });

  }


  /* =====================================================
     SMOOTH SCROLL
  ===================================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");


        if (!targetId || targetId === "#") {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (!target) {
          return;
        }


        event.preventDefault();


        const headerHeight =
          header ? header.offsetHeight : 0;


        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;


        window.scrollTo({
          top: top,
          behavior: "smooth"
        });

      });

    });

});
