// Sample data - in a real app, this would come from an API
const allLeaderboardData = [
    { rank: 1, name: 'Asim Khattak', level: 12, xp: 2582, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 2, name: 'Shazain', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 3, name: 'Salman Farooq', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 4, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 5, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 6, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 7, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 8, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 9, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
    { rank: 10, name: 'Javid Afridi', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' },
   
];

// Your rank data
const yourRank = { rank: 122, name: 'Asim Khattak', level: 12, xp: 2500, avatar: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/avatars/10.png' };

// Helper functions
function getRankClass(rank) {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return '';
}

function formatXP(xp) {
    return `${xp.toLocaleString()} XP`;
}

// Render functions
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

    // Render all data at once
    allLeaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="rank-cell ${getRankClass(entry.rank)}">#${entry.rank}</td>
            <td class="rank-cell ${getRankClass(entry.rank)}"><img src="${entry.avatar}" alt="${entry.name}" class="avatar"></td>
            <td class="name-cell rank-cell ${getRankClass(entry.rank)}">${entry.name}</td>
            <td class="rank-cell ${getRankClass(entry.rank)}">${entry.level}</td>
            <td class="xp-cell rank-cell ${getRankClass(entry.rank)}">${formatXP(entry.xp)}</td>
        `;
        tbody.appendChild(row);
    });

    renderYourRank();
}

function renderYourRank() {
    const tbody = document.getElementById('yourRankBody');
    tbody.innerHTML = '';

    const row = document.createElement('tr');
    row.classList.add('your-rank-row');
    row.innerHTML = `
        <td class="rank-cell" style="color:#1E1E1E !important">#${yourRank.rank}</td>
        <td style="color:#1E1E1E !important"><img src="${yourRank.avatar}" alt="${yourRank.name}" class="avatar"></td>
        <td style="color:#1E1E1E !important" class="name-cell">${yourRank.name}</td>
        <td style="color:#1E1E1E !important">${yourRank.level}</td>
        <td style="color:#1E1E1E !important" class="xp-cell">${formatXP(yourRank.xp)}</td>
    `;
    tbody.appendChild(row);
}

// Filter change handlers
document.getElementById('usersFilter').addEventListener('change', () => {
    // In a real app, this would fetch new data based on the filter
    renderLeaderboard();
});

document.getElementById('rankingFilter').addEventListener('change', () => {
    // In a real app, this would fetch new data based on the filter
    renderLeaderboard();
});

// Initial render
renderLeaderboard();