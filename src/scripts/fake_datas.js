const generateFakeContacts = (num) => {
    const contacts = [];
    const firstNames = ["John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Laura", "Chris", "Jessica"];
    const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor"];

    for (let i = 1; i <= num; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const phoneNumber = `(555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}`;

        contacts.push({
            id: i,
            firstName: firstName,
            lastName: lastName,
            phone: phoneNumber,
            avatar: `./src/images/avatars/avatar${i}.png`
        });
    }
    return contacts;
};
const fakeContacts = generateFakeContacts(10);
console.log(fakeContacts);

const displayContacts = (contacts) => {
    const appContainer = document.getElementById('contacts-list');
    appContainer.innerHTML = '';

    contacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.className = 'contact';
        contactElement.innerHTML = `
            <img src="https://media.istockphoto.com/id/1135140060/fr/vectoriel/%C3%A9motic%C3%B4ne-de-poo-confus-emoji-merde-visage-illustration-vectorielle.jpg?s=612x612&w=0&k=20&c=dsC-dQoIuqLoWG9aspRbSE2dTN-PUCaLfM_aNgP2WPA=" alt="${contact.firstName} ${contact.lastName} avatar" class="contact-avatar">
            <div class="contact-info">
                <p class="contact-name">${contact.firstName} ${contact.lastName}</p>
                <p class="contact-phone">${contact.phone}</p>
            </div>
        `;
        appContainer.appendChild(contactElement);
    });
};
displayContacts(fakeContacts);
