const teamMembers = [
    { name: "Sahel Azzam", role: "Team Lead" },
    { name: "Jake Bonanno", role: "Back End" },
    { name: "Gabriel Simiyu", role: "Front End, Back End, and Testings" }
    // Add more team members here
];

const teamList = document.getElementById('team-list');

teamMembers.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = `${member.name} - ${member.role}`;
    teamList.appendChild(listItem);
});