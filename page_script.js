// --- DATA ---
const servicesData = [
    { name: "Expert Guidance & Support", description: "Our team of experienced professionals is here to answer your questions and provide compassionate support for all your pet-related concerns.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`},
    { name: "Pet Adoption", description: "Give a loving home to a deserving pet. We facilitate the adoption process to connect you with your new family member.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`},
    { name: "Pet Boarding / Hostel", description: "Our clean and safe facility provides a comfortable stay for your pets when you are away. They will receive professional care and lots of love.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`},
    { name: "Pet Training", description: "From basic obedience to advanced skills, our certified trainers use positive reinforcement to help your pet become a well-behaved companion.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`},
    { name: "Stud & Breeding Services", description: "We offer professional and ethical stud, crossing, and breeding services, ensuring the health and well-being of the animals involved.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>`},
    { name: "Vet Consultation", description: "Access to on-site or virtual vet consultations for general health checks and advice, ensuring your pet stays healthy and happy.", icon: `<svg class="w-10 h-10 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>`}
];

const breedsData = {
    "Labrador": { "image": "resizecom_labrador.jpg", "Major Trait": "Friendly & Active", "Lifespan": "10-13 years", "Height": "21-24 in", "Weight": "55-80 lbs", "Care Needs": "Needs daily exercise and regular grooming.", "Fun Facts": "Their 'soft mouth' allows them to carry things gently." },
    "Great Dane": { "image": "resizecom_great%20dane.jpg", "Major Trait": "Gentle Giant", "Lifespan": "7-10 years", "Height": "28-32 in", "Weight": "110-175 lbs", "Care Needs": "Monitor for bloat; needs joint support.", "Fun Facts": "Despite the name, this breed is German, not Danish." },
    "Shih Tzu": { "image": "resizecom_Shih%20Tzu.webp", "Major Trait": "Affectionate Lapdog", "Lifespan": "10-16 years", "Height": "8-11 in", "Weight": "9-16 lbs", "Care Needs": "Daily grooming and regular eye cleaning are essential.", "Fun Facts": "Their name means 'little lion' in Chinese." },
    "Golden Retriever": { "image": "resizecom_Golden%20retriever.jpeg", "Major Trait": "Intelligent & Gentle", "Lifespan": "10-12 years", "Height": "21-24 in", "Weight": "55-75 lbs", "Care Needs": "High energy; requires daily walks and playtime.", "Fun Facts": "Descended from a single dog in 1860s Scotland." },
    "Doberman": { "image": "resizecom_Doberman.jpg", "Major Trait": "Loyal & Fearless", "Lifespan": "10-13 years", "Height": "24-28 in", "Weight": "60-100 lbs", "Care Needs": "Requires strong leadership and socialization.", "Fun Facts": "They were called 'Devil Dogs' in WWII for their bravery." },
    "Husky": { "image": "resizecom_husky.jpeg", "Major Trait": "Energetic & Independent", "Lifespan": "12-15 years", "Height": "20-23 in", "Weight": "35-60 lbs", "Care Needs": "Not for hot climates; loves to run.", "Fun Facts": "Famous for the 1925 Alaskan serum run." },
    "Chow Chow": { "image": "resizecom_Chow-Chow.webp", "Major Trait": "Dignified & Reserved", "Lifespan": "8-12 years", "Height": "17-20 in", "Weight": "45-70 lbs", "Care Needs": "Can be stubborn; needs early socialization.", "Fun Facts": "One of two breeds with a blue-black tongue." },
    "Poodle": { "image": "resizecom_poodle.jpeg", "Major Trait": "Highly Intelligent", "Lifespan": "12-15 years", "Height": "10-24 in", "Weight": "4-70 lbs", "Care Needs": "Coat requires professional grooming.", "Fun Facts": "Their haircut was designed for swimming protection." },
    "Pomeranian": { "image": "resizecom_pomeranian.jpg", "Major Trait": "Lively & Bold", "Lifespan": "12-16 years", "Height": "6-7 in", "Weight": "3-7 lbs", "Care Needs": "Prone to dental issues; requires regular brushing.", "Fun Facts": "Popularized by Queen Victoria." },
    "German Shepherd": { "image": "resizecom_german%20shepherd.jpg", "Major Trait": "Confident & Courageous", "Lifespan": "9-13 years", "Height": "22-26 in", "Weight": "50-90 lbs", "Care Needs": "Prone to hip dysplasia; needs training.", "Fun Facts": "First guide dogs for the blind were German Shepherds." },
    "Beagle": { "image": "resizecom_beagle.jpeg", "Major Trait": "Curious & Merry", "Lifespan": "10-15 years", "Height": "13-15 in", "Weight": "20-30 lbs", "Care Needs": "Follows scents; needs a secure yard.", "Fun Facts": "Their name may mean 'gaping throat' in French." },
    "Saint Bernard": { "image": "resizecom_saint%20berned.jpeg", "Major Trait": "Patient & Calm", "Lifespan": "8-10 years", "Height": "26-30 in", "Weight": "120-180 lbs", "Care Needs": "Drools a lot and sheds heavily.", "Fun Facts": "Famous for rescuing travelers in the Alps." }
};

const blogData = [
    {
        title: "Monsoon Care for Pups",
        summary: "A guide to keeping your dog safe, healthy, and happy during the rainy season.",
        image: "https://placehold.co/800x400/93C5FD/ffffff?text=Happy+Dog+Indoors",
        link: "blog-post-1.html"
    },
    {
        title: "The Ultimate New Puppy Checklist",
        summary: "Everything you need to prepare for your new furry family member's arrival.",
        image: "https://placehold.co/800x400/A78BFA/ffffff?text=New+Puppy+Essentials",
        link: "#" // You can create blog-post-2.html later
    },
    {
        title: "Solving Separation Anxiety",
        summary: "Tips and tricks to help your dog feel more comfortable when they're home alone.",
        image: "https://placehold.co/800x400/F472B6/ffffff?text=Calm+Dog+Alone",
        link: "#" // You can create blog-post-3.html later
    }
];

// --- RENDER FUNCTIONS ---
function renderServices() {
    const container = document.getElementById('services-list');
    const dropdown = document.getElementById('service-inquiry');
    if (!container || !dropdown) return;
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'bg-white p-8 rounded-3xl shadow-lg transition-transform transform hover:scale-105';
        card.innerHTML = `${service.icon}<h3 class="text-xl font-semibold mb-2">${service.name}</h3><p class="text-gray-600">${service.description}</p>`;
        container.appendChild(card);
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = service.name;
        dropdown.appendChild(option);
    });
}

function renderBreeds() {
    const container = document.getElementById('breeds-container');
    if (!container) return;
    Object.entries(breedsData).forEach(([breedName, data]) => {
        const card = document.createElement('div');
        card.className = 'card-container w-full';
        card.addEventListener('click', () => card.classList.toggle('is-flipped'));
        const front = document.createElement('div');
        front.className = 'card-front p-6 bg-gray-100 rounded-3xl shadow-lg flex flex-col items-center justify-between';
        const imgFront = document.createElement('img');
        imgFront.src = `https://github.com/gouravraina348-prog/Friends_Kennel_Hub/raw/main/${data.image}`;
        imgFront.alt = breedName;
        imgFront.className = 'w-full h-64 object-cover rounded-2xl mb-4';
        const title = document.createElement('h3');
        title.className = 'text-2xl font-semibold text-gray-800 text-center mb-3';
        title.textContent = breedName;
        const specsList = document.createElement('ul');
        specsList.className = 'text-gray-600 space-y-1 text-left text-sm w-full px-4';
        ['Major Trait', 'Lifespan', 'Height', 'Weight', 'Care Needs'].forEach(key => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
            specsList.appendChild(li);
        });
        front.append(imgFront, title, specsList);
        const back = document.createElement('div');
        back.className = 'card-back p-6 bg-emerald-500 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center';
        const funFact = document.createElement('p');
        funFact.className = 'text-lg italic leading-relaxed text-white fun-fact-font';
        funFact.textContent = data["Fun Facts"];
        back.append(funFact);
        card.append(front, back);
        container.appendChild(card);
    });
}

function renderBlog(showAll = false) {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    
    const postsToShow = showAll ? blogData : blogData.slice(0, 3);
    
    postsToShow.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105';
        postEl.innerHTML = `
            <a href="${post.link}">
                <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
                    <p class="text-gray-600 text-sm mb-4">${post.summary}</p>
                    <span class="font-semibold text-emerald-600">Read More &rarr;</span>
                </div>
            </a>
        `;
        container.appendChild(postEl);
    });
}

function handleContactForm() {
    const emailButton = document.getElementById('email-button');
    const whatsappButton = document.getElementById('whatsapp-button');
    const statusMessage = document.getElementById('status-message');
    const getFormData = () => ({
        name: document.getElementById('name').value.trim(),
        service: document.getElementById('service-inquiry').value,
        message: document.getElementById('message').value.trim()
    });
    const validateForm = (data) => {
        if (!data.service) {
            statusMessage.textContent = 'Please select a service.';
            statusMessage.className = 'mt-4 font-semibold text-center text-red-500';
            return false;
        }
        statusMessage.textContent = '';
        return true;
    };
    if (emailButton) {
        emailButton.addEventListener('click', () => {
            const data = getFormData();
            if (!validateForm(data)) return;
            const subject = encodeURIComponent(`Inquiry about ${data.service}`);
            const body = encodeURIComponent(`Hello Friends' Kennel Hub,\n\nI'm inquiring about the following service: ${data.service}\n\n${data.name ? `Name: ${data.name}\n` : ''}${data.message ? `Message:\n${data.message}\n\n` : '\n'}Thank you.`);
            window.location.href = `mailto:info@friendskennelhub.com?subject=${subject}&body=${body}`;
        });
    }
    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            const data = getFormData();
            if (!validateForm(data)) return;
            let text = `Hello! I'm inquiring about your "${data.service}" service.`;
            if (data.name) text += ` My name is ${data.name}.`;
            if (data.message) text += `\n\nMy message: ${data.message}`;
            const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;
            window.open(whatsappLink, '_blank');
        });
    }
}

