    document.getElementById("signupSDG").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const answer = document.getElementById("answer").value.trim(); 
    const sex = document.querySelector('input[name="sex"]:checked');
    const sexValue = sex.value; 
    const error = document.getElementById("error");
  
    if (!firstName || !lastName || !email || !password || !answer || !sex) {
      error.textContent = "Please answer all the required fields.";
      return;
    }
  
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("answer", answer);
    localStorage.setItem("sex", sexValue);

  
    window.location.href = "project_profile_medina.html";
  });
  