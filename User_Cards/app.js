const userGrid = document.getElementById('user-grid');
const statusContainer = document.getElementById('status-container');

async function fetchAndDisplayUsers() {
    userGrid.innerHTML = '';
    statusContainer.innerHTML = '';

    showLoading();

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`);
        }

        const users = await response.json();
        
        clearStatus();

        if (users.length === 0) {
            showStatus('No users found.', 'status-msg');
            return;
        }

        renderUsers(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        showError(error.message || 'An unknown error occurred while fetching users.');
    }
}

function showLoading() {
    statusContainer.innerHTML = `<div class="status-msg">Loading users...</div>`;
}

function clearStatus() {
    statusContainer.innerHTML = '';
}

function showStatus(message, className) {
    statusContainer.innerHTML = `<div class="${className}">${message}</div>`;
}

function showError(message) {
    statusContainer.innerHTML = `
        <div class="status-msg error-msg">
            <p><strong>Error:</strong> ${message}</p>
            <button id="retry-btn" class="btn">Retry</button>
        </div>
    `;
    
    document.getElementById('retry-btn').addEventListener('click', fetchAndDisplayUsers);
}

function renderUsers(users) {
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h2>${escapeHtml(user.name)}</h2>
            <p><strong>Username:</strong> ${escapeHtml(user.username)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(user.email)}">${escapeHtml(user.email)}</a></p>
            <p><strong>Phone:</strong> ${escapeHtml(user.phone)}</p>
            <p><strong>Website:</strong> <a href="https://${escapeHtml(user.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(user.website)}</a></p>
            <p><strong>Company:</strong> ${escapeHtml(user.company.name)}</p>
        `;
        
        userGrid.appendChild(card);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayUsers);
