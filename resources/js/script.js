
// uses api provided by github, grabs content and organizes it onto the html page

document.addEventListener('DOMContentLoaded', function() {
    const username = 'saunade';
    const url = `https://api.github.com/users/saunade/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('github-projects');

            data.forEach(repo => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';

                const projectName = document.createElement('h3');
                projectName.textContent = repo.name;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = repo.description;

                const projectLink = document.createElement('a');
                projectLink.href = repo.html_url;
                projectLink.textContent = 'View on GitHub';
                projectLink.target = '_blank';

                projectDiv.appendChild(projectName);
                projectDiv.appendChild(projectDescription);
                projectDiv.appendChild(projectLink);

                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error fetching GitHub repositories:', error));
});
