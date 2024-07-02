document.addEventListener('DOMContentLoaded', async () => {
    const username = 'fixyyt'; // replace with your GitHub username

    // Fetch profile picture
    const profilePic = document.getElementById('profile-pic');
    const profileResponse = await fetch(`https://api.github.com/users/${username}`);
    const profileData = await profileResponse.json();
    profilePic.src = profileData.avatar_url;
    const favicon = document.getElementById('favicon');
    favicon.href = profileData.avatar_url;

    // Fetch repositories
    const projectsList = document.getElementById('projects-list');
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const reposData = await reposResponse.json();
    
    reposData.forEach(repo => {
        const projectItem = document.createElement('div');
        const description = repo.description ? `<p>${repo.description}</p>` : '';
        projectItem.innerHTML = `<h2>${repo.name}</h2><p>${description}</p><a href="${repo.html_url}" target="_blank">View Project</a>`;
        projectsList.appendChild(projectItem);
    });
});
