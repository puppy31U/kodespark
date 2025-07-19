document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting KodeSparks! We will get back to you soon.");
    contactForm.reset();
  });

  const resumeForm = document.querySelector("#resume-form");
  if (resumeForm) {
    resumeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(resumeForm);
      // Normally you'd send this to a backend endpoint
      alert("Resume submitted successfully! We will review your profile.");
      resumeForm.reset();
    });
  }
});
const showProgramsBtn = document.getElementById("show-programs-btn");
const programDetails = document.getElementById("program-details");

if (showProgramsBtn) {
  showProgramsBtn.addEventListener("click", () => {
    showProgramsBtn.style.display = "none";
    programDetails.style.display = "block";
  });
}