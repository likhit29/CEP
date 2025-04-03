// Function to initialize the doctor grid
function initializeDoctorGrid() {
    const doctorGrid = document.getElementById('doctorGrid');
    doctors.forEach(doctor => {
        const hospital = hospitals.find(h => h.id === doctor.hospitalId);
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.setAttribute('data-name', doctor.name.toLowerCase());
        card.setAttribute('data-specialty', doctor.specialty.toLowerCase());
        
        const imageUrl = doctor.image || 'https://via.placeholder.com/150';
        
        card.innerHTML = `
            <img alt="Portrait of ${doctor.name}" src="${imageUrl}" />
            <h3>${doctor.name}</h3>
            <p>${doctor.specialty}</p>
            <div class="rating">⭐ ${doctor.rating.toFixed(1)}</div>
            <p class="hospital-name">${hospital ? hospital.name : 'Independent Practice'}</p>
            <div class="divider"></div>
            <button class="view-profile-btn" 
                data-name="${doctor.name}"
                data-specialty="${doctor.specialty}"
                data-experience="${doctor.experience}"
                data-rating="${doctor.rating}"
                data-availability="${doctor.availability.join(', ')}"
                data-image="${imageUrl}">
                View Profile
            </button>
        `;
        doctorGrid.appendChild(card);
    });
}

function filterDoctors() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const doctorCards = document.querySelectorAll('.doctor-card');

    doctorCards.forEach(card => {
        const name = card.getAttribute('data-name');
        const specialty = card.getAttribute('data-specialty');
        if (name.includes(filter) || specialty.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

function viewProfile(name, specialty, experience, rating, availability, imageUrl) {
    const modal = document.getElementById('profileModal');
    document.getElementById('profileName').innerText = name;
    document.getElementById('profileTitle').innerText = specialty;
    document.getElementById('profileExperience').innerText = `Experience: ${experience} years`;
    document.getElementById('profileRating').innerText = `Rating: ${rating} ⭐`;
    document.getElementById('profileAvailability').innerText = `Available: ${availability}`;
    document.getElementById('profileImage').src = imageUrl;
    modal.style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDoctorGrid();
    
    document.querySelectorAll('.view-profile-btn').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const specialty = this.getAttribute('data-specialty');
            const experience = this.getAttribute('data-experience');
            const rating = this.getAttribute('data-rating');
            const availability = this.getAttribute('data-availability');
            const image = this.getAttribute('data-image');
            viewProfile(name, specialty, experience, rating, availability, image);
        });
    });
});