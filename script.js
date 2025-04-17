const roles = [
    "Lasya Priya",
    "Full-Stack Developer",
    "Software Tester",
    "Software Engineer",
    "UI/UX Designer"
  ];
  
  const textElement = document.getElementById("dynamic-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentRole = roles[roleIndex];
    const displayedText = isDeleting
      ? currentRole.substring(0, charIndex--)
      : currentRole.substring(0, charIndex++);
  
    textElement.textContent = displayedText;
  
    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1500); // pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  
    const delay = isDeleting ? 50 : 100;
    setTimeout(typeWriter, delay);
  }
  
  document.addEventListener("DOMContentLoaded", typeWriter);
  