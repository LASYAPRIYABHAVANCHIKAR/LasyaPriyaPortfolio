document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Full Stack Developer ",
    "Software Engineer ",
    "UI/UX Designer ",
    "Software Tester "
  ];

  const roleText = document.getElementById("role-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeRoleText() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      roleText.textContent = currentRole.substring(0, charIndex--);
    } else {
      roleText.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRoleText, 1300);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRoleText, 400);
    } else {
      setTimeout(typeRoleText, isDeleting ? 50 : 100);
    }
  }

  typeRoleText();
});
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
function showTab(tabName) {
document.querySelectorAll('.tab-box').forEach(tab => tab.classList.add('hidden'));
document.getElementById(tabName).classList.remove('hidden');
document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
const activeIndex = tabName === 'cert' ? 0 : 1;
document.querySelectorAll('.tab-btn')[activeIndex].classList.add('active');
}

function showCert(id) {
const card = document.getElementById(id);
if (card) {
  card.classList.remove("hidden");
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}
}

function hideDetail(id) {
const card = document.getElementById(id);
if (card) {
  card.classList.add("hidden");
}
}

function showProject(id, event) {
event.preventDefault();
document.querySelectorAll('.project-glass-card').forEach(el => el.classList.add('hidden'));
document.getElementById(id).classList.remove('hidden');
}

function hideProject(id) {
document.getElementById(id).classList.add('hidden');
}

function openModal() {
document.getElementById("resumeModal").style.display = "block";
}

function closeModal() {
document.getElementById("resumeModal").style.display = "none";
}

window.onclick = function(event) {
const modal = document.getElementById("resumeModal");
if (event.target === modal) {
  modal.style.display = "none";
}
}

particlesJS("particles-js", {
"particles": {
  "number": {
    "value": 60,
    "density": { "enable": true, "value_area": 800 }
  },
  "color": { "value": "#00f7ff" },
  "shape": {
    "type": "circle",
    "stroke": { "width": 0, "color": "#000000" },
    "polygon": { "nb_sides": 5 }
  },
  "opacity": {
    "value": 0.3,
    "random": true
  },
  "size": {
    "value": 4,
    "random": true
  },
  "move": {
    "enable": true,
    "speed": 1.2,
    "direction": "none",
    "out_mode": "out"
  },
  "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.2,
    "width": 1
  }
},
"interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": { "enable": true, "mode": "grab" },
    "onclick": { "enable": true, "mode": "push" }
  },
  "modes": {
    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
    "push": { "particles_nb": 4 }
  }
},
"retina_detect": true
});
// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("16OKrJJhCbc7Gyc4d"); // Your Public Key

  const form = document.getElementById("resumeForm");
  const popup = document.getElementById("successPopup");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submission prevented");

      emailjs.sendForm('service_odtdaoy', 'template_oo881rf', this)
        .then(function () {
          popup.classList.add("show");

          setTimeout(() => {
            popup.classList.remove("show");
          }, 5000);

          form.reset();
          closeModal(); // Only if this function behaves well on mobile
        }, function (error) {
          console.log(error);
          alert("Oops! Something went wrong. Please try again.");
        });
    });
  }
});
// ✅ 1. Scroll-triggered section animation (like for landing)
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".animate-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-active");
        observer.unobserve(entry.target); // Optional: only animate once
      }
    });
  }, {
    threshold: 0.15
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});

// ✅ 2. Typewriter animation for About section (with scroll trigger)
document.addEventListener("DOMContentLoaded", () => {
  const aboutParagraphs = [
    `I’m Lasya Priya, a passionate and hands-on Full Stack Developer with a background in Electronics & Communication and a Master’s in Computer Science from Pace University, NYC.`,
    `I specialize in building web applications that are not only functional but also intuitive and performance-driven.`,
    `With experience in Java, Spring Boot, React.js, MongoDB, SQL, and automated testing using Cypress, I bring both logic and creativity to the table.`,
    `I believe in clean code, clear UI, and continuous learning. My work blends backend efficiency with frontend elegance — always with the end-user in mind.`,
    `Currently seeking opportunities to contribute to impactful teams, build scalable solutions, and grow as a tech leader in a collaborative environment.`
  ];

  const typewriterTarget = document.getElementById("typewriterText");
  if (!typewriterTarget) return;

  let paraIndex = 0;
  let charIndex = 0;

  function typeParagraph() {
    if (paraIndex >= aboutParagraphs.length) return;

    const currentPara = aboutParagraphs[paraIndex];

    if (charIndex === 0) {
      const p = document.createElement("p");
      p.classList.add("about-text");
      typewriterTarget.appendChild(p);
    }

    const currentP = typewriterTarget.lastElementChild;
    currentP.innerHTML += currentPara.charAt(charIndex);
    charIndex++;

    if (charIndex < currentPara.length) {
      setTimeout(typeParagraph, 20);
    } else {
      charIndex = 0;
      paraIndex++;
      setTimeout(typeParagraph, 400);
    }
  }

  // 🚀 Trigger typewriter on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeParagraph();
        observer.unobserve(entry.target); // Only run once
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(typewriterTarget);
});
/*For Skills*/
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".animate-skill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-active");
        observer.unobserve(entry.target); // Remove if you want to animate only once
      }
    });
  }, {
    threshold: 0.15
  });

  skillCards.forEach(card => {
    observer.observe(card);
  });
});






