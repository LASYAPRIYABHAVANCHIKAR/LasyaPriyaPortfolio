document.addEventListener("DOMContentLoaded", () => {
    const roles = [
      "Full Stack Developer ",
      "Software Engineer ",
      "UI/UX Designer ",
      "Software Tester "];
  
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
  function showCert(certId) {
    document.querySelectorAll('.cert-detail-card').forEach(card => card.classList.add('hidden'));
    document.getElementById(certId).classList.remove('hidden');
  
    // Scroll back to cert links
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
  }
  
  function showTab(tabId) {
    document.querySelectorAll('.tab-box').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
  
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (tabId === 'cert') {
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
    } else {
      document.querySelector('.tab-btn:nth-child(3)').classList.add('active');
    }
  }
  function showEdu(eduId) {
    document.querySelectorAll('.edu-detail-card').forEach(card => card.classList.add('hidden'));
    document.getElementById(eduId).classList.remove('hidden');
  
    // Optional scroll into view
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
  }
  function showTab(tabName) {
    document.querySelectorAll('.tab-box').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeIndex = tabName === 'cert' ? 0 : 1;
    document.querySelectorAll('.tab-btn')[activeIndex].classList.add('active');
  }
  function showCert(id) {
    document.querySelectorAll('#certifications .cert-detail-card').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  function showEdu(id) {
    document.querySelectorAll('#education .cert-detail-card').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  function hideDetail(id) {
    document.getElementById(id).classList.add('hidden');
  }
  function hideDetail(detailId, scrollTarget) {
    document.getElementById(detailId).classList.add("hidden");
    document.getElementById(scrollTarget).scrollIntoView({ behavior: "smooth" });
  }
  
  
  