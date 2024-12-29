function showResume() {
  const profilePic = document.getElementById("profilePic");
  const resume = document.getElementById("resume");

  profilePic.style.opacity = "0.3";
  resume.style.opacity = "1";
}

function hideResume() {
  const profilePic = document.getElementById("profilePic");
  const resume = document.getElementById("resume");

  profilePic.style.opacity = "1";
  resume.style.opacity = "0";
}