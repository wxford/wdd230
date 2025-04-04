// Load member data and display
async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership: ${member.membership}</p>
            <p>Industry: ${member.industry}</p>
        `;
        
        container.appendChild(card);
    });
}

// Toggle between grid and list views
document.getElementById('grid-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.remove('list-view');
    container.classList.add('grid-view');
});

document.getElementById('list-view').addEventListener('click', () => {
    const container = document.getElementById('members-container');
    container.classList.remove('grid-view');
    container.classList.add('list-view');
    
    // Re-display members in list format
    const members = JSON.parse(localStorage.getItem('members'));
    if (members) {
        displayMembersAsList(members);
    }
});

function displayMembersAsList(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content
    
    const list = document.createElement('ul');
    list.className = 'member-list';
    
    members.forEach(member => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>${member.name}</strong> | 
            ${member.address} | 
            Phone: ${member.phone} | 
            <a href="${member.website}" target="_blank">Website</a> | 
            Membership: ${member.membership}
        `;
        list.appendChild(item);
    });
    
    container.appendChild(list);
}

// Initialize
getMembers();