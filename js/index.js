document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector("#github-form [name='submit']");
    const userForm = document.getElementById("github-form");

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the username from the input field
        const username = document.getElementById("search").value;

        fetch(`https://api.github.com/users/${username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
        .then(response => response.json())
        .then(userData => {
            // Display user information in the user-list (customize as needed)
            const userList = document.getElementById('user-list');
            userList.innerHTML = `
                <li>Name: ${userData.name}</li>
                <li>User Name: ${userData.login}</li>
                <li>Bio: ${userData.bio}</li>
                <li>Followers: ${userData.followers}</li>
                <li>Public Repositories: ${userData.public_repos}</li>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error fetching GitHub user information. Please try again.');
        });
    });
});
