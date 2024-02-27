function showResume() {
    var profilePic = document.getElementById("profilePic");
    var resume = document.getElementById("resume");

    profilePic.style.display = "none";
    resume.style.display = "block";
}

function hideResume() {
    var profilePic = document.getElementById("profilePic");
    var resume = document.getElementById("resume");

    profilePic.style.display = "block";
    resume.style.display = "none";
}
