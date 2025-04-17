document.addEventListener("DOMContentLoaded", () => {
    const roles = [
      "Full Stack Developer",
      "Software Engineer",
      "UI/UX Designer",
      "Software Tester"];
  
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
        "value": 0.4,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 1.6,
        "direction": "none",
        "out_mode": "out"
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
  