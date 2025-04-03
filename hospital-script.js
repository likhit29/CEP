lucide.createIcons();

const searchInput = document.getElementById('searchInput');
const hospitalsSection = document.getElementById('hospitalsSection');
const hospitalDetails = document.getElementById('hospitalDetails');
const hospitalsGrid = document.getElementById('hospitalsGrid');
const doctorsGrid = document.getElementById('doctorsGrid');
const hospitalInfo = document.getElementById('hospitalInfo');
const backButton = document.getElementById('backButton');

function createRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i data-lucide="star" class="rating-star" style="fill: #FBBF24;"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i data-lucide="star-half" class="rating-star" style="fill: #FBBF24;"></i>';
    }
    
    return `
        <div class="rating">
            ${starsHTML}
            <span class="rating-value">${rating.toFixed(1)}</span>
        </div>
    `;
}

function createHospitalCard(hospital) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${hospital.image}" alt="${hospital.name}" class="hospital-image">
        <div class="card-content">
            <div class="flex justify-between items-center mb-2">
                <h3 class="text-xl font-semibold text-gray-900">${hospital.name}</h3>
                ${createRatingHTML(hospital.rating)}
            </div>
            <div class="flex items-center text-gray-600 mb-2">
                <i data-lucide="map-pin" class="mr-2"></i>
                <span class="text-sm">${hospital.address}</span>
            </div>
            <div class="specialties mt-3">
                ${hospital.specialties.map(specialty => 
                    `<span class="specialty-tag">${specialty}</span>`
                ).join('')}
            </div>
            ${hospital.emergency ? 
                `<div class="emergency-tag mt-4">24/7 Emergency</div>` : 
                ''}
        </div>
    `;
    
    card.addEventListener('click', () => showHospitalDetails(hospital));
    return card;
}

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-content">
            <div class="flex items-center mb-4">
                <img src="${doctor.image}" alt="${doctor.name}" class="doctor-image mr-4">
                <div>
                    <h3 class="text-xl font-semibold text-gray-900">${doctor.name}</h3>
                    <p class="text-blue-600">${doctor.specialty}</p>
                </div>
            </div>
            <div class="flex items-center text-gray-600 mb-2">
                <i data-lucide="clock" class="mr-2"></i>
                <span class="text-sm">${doctor.experience} years experience</span>
            </div>
            <div class="flex items-center text-gray-600 mb-3">
                <i data-lucide="calendar" class="mr-2"></i>
                <span class="text-sm">Available: ${doctor.availability.join(', ')}</span>
            </div>
            <div class="flex justify-between items-center">
                ${createRatingHTML(doctor.rating)}
                <button class="book-button">Book Appointment</button>
            </div>
        </div>
    `;
    return card;
}

function showHospitalDetails(hospital) {
    hospitalsSection.classList.add('hidden');
    hospitalDetails.classList.remove('hidden');
    
    const hospitalDoctors = doctors.filter(doctor => doctor.hospitalId === hospital.id);
    
    hospitalInfo.innerHTML = `
        <img src="${hospital.image}" alt="${hospital.name}" class="hospital-detail-image">
        <div class="hospital-info">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-2">${hospital.name}</h2>
                    <div class="flex items-center text-gray-600 mb-4">
                        <i data-lucide="map-pin" class="mr-2"></i>
                        <span>${hospital.address}</span>
                    </div>
                </div>
                ${createRatingHTML(hospital.rating)}
            </div>
            
            <p class="text-gray-600 mb-6">${hospital.description}</p>
            
            <div class="specialties mb-6">
                ${hospital.specialties.map(specialty => 
                    `<span class="specialty-tag">${specialty}</span>`
                ).join('')}
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Facilities</h3>
            <ul class="grid grid-cols-2 gap-2 mb-6">
                ${hospital.facilities.map(facility => 
                    `<li class="flex items-center text-gray-600">
                        <i data-lucide="check-circle" class="mr-2 text-green-500"></i>
                        ${facility}
                    </li>`
                ).join('')}
            </ul>
            
            <div class="hospital-stats">
                <div class="stat-item">
                    <span class="stat-value">${hospital.stats.beds}</span>
                    <span class="stat-label">Hospital Beds</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${hospital.stats.doctors}</span>
                    <span class="stat-label">Doctors</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${hospital.stats.staff}</span>
                    <span class="stat-label">Staff Members</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${hospital.stats.dailyPatients}</span>
                    <span class="stat-label">Daily Patients</span>
                </div>
            </div>
        </div>
    `;
    
    doctorsGrid.innerHTML = '';
    hospitalDoctors.forEach(doctor => {
        doctorsGrid.appendChild(createDoctorCard(doctor));
    });
    
    lucide.createIcons();
}

function filterAndRender() {
    const query = searchInput.value.toLowerCase();
    
    const filteredHospitals = hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(query) ||
        hospital.specialties.some(s => s.toLowerCase().includes(query))
    );
    
    hospitalsGrid.innerHTML = '';
    filteredHospitals.forEach(hospital => {
        hospitalsGrid.appendChild(createHospitalCard(hospital));
    });
    
    lucide.createIcons();
}

searchInput.addEventListener('input', filterAndRender);
backButton.addEventListener('click', () => {
    hospitalDetails.classList.add('hidden');
    hospitalsSection.classList.remove('hidden');
});

// Initial render
filterAndRender();