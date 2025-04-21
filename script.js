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
