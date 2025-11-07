// Loader
window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
});

// Registration Form - Error Handling & Toast Notification
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("registerForm");
  var errorMsg = document.getElementById("formError");
  var toast = document.getElementById("toast");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var inputs = form.querySelectorAll("input[required]");
      let hasError = false;
      inputs.forEach(function(input) {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
          hasError = true;
        } else {
          input.style.borderColor = "#bbb";
        }
      });
      if (hasError) {
        errorMsg.textContent = "Please fill in all required fields!";
      } else {
        errorMsg.textContent = "";
        toast.style.visibility = "visible";
        setTimeout(function(){ toast.style.visibility = "hidden"; }, 3200);
        form.reset();
      }
    });
  }

  // Register button smoothly scrolls to form
  var btn = document.getElementById("registerBtn");
  if (btn) {
    btn.addEventListener("click", function() {
      document.querySelector(".form-section").scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});

// Animated Counter
function animateCounter(id, end, duration=1000) {
  var obj = document.getElementById(id);
  var start = 0;
  var range = end - start;
  var minTimer = 40;
  var stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);

  var timer = setInterval(function() {
    start += 1;
    obj.textContent = start;
    if (start === end) clearInterval(timer);
  }, stepTime);
}
animateCounter("count", 137); // Change "137" to your current registrations

// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});
