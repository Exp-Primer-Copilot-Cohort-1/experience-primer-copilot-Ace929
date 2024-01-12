function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberText = document.getElementById("memberText");
    var skillsText = document.getElementById("skillsText");
    var memberImg = document.getElementById("memberImg");
    var skillsImg = document.getElementById("skillsImg");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    member.style.display = "block";
    skills.style.display = "none";
    memberText.style.color = "#fff";
    skillsText.style.color = "#000";
    memberImg.style.color = "#fff";
    skillsImg.style.color = "#000";
    memberBtn.style.backgroundColor = "#000";
    skillsBtn.style.backgroundColor = "#fff";
}