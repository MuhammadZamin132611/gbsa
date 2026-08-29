// model.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the HTML into the DOM
    injectModalHTML();

    // 2. Setup the variables and event listeners
    setupModalLogic();
});

function injectModalHTML() {
    if (document.getElementById('modalOverlay')) return;

    const modalTemplate = `
        <style>
            /* Enhanced Custom Scrollbar */
            .custom-scrollbar::-webkit-scrollbar { width: 8px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(11, 25, 44, 0.5); border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #1E3A8A; border-radius: 10px; border: 2px solid #0B192C; }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #F59E0B; }
        </style>

        <!-- Deep backdrop blur overlay -->
        <div id="modalOverlay" class="fixed inset-0 bg-custom-dark/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-6 opacity-0 pointer-events-none transition-all duration-500 ease-out">
            
            <!-- Premium Modal Card with Glow -->
            <div id="modalCard" class="bg-gradient-to-b from-custom-blue/20 to-custom-dark w-full max-w-5xl max-h-[95vh] flex flex-col rounded-[2rem] shadow-[0_0_50px_-12px_rgba(30,58,138,0.5)] border border-custom-blue relative transform scale-95 transition-transform duration-500 ease-out overflow-hidden">
                
                <!-- Header Segment -->
                <div class="p-6 md:px-10 md:py-8 border-b border-custom-blue/50 bg-custom-dark/50 flex justify-between items-start flex-shrink-0 backdrop-blur-md">
                    <div>
                        <div class="mb-3 inline-flex items-center gap-2 bg-custom-blue/30 px-4 py-1.5 rounded-full text-custom-amber text-xs font-bold tracking-widest uppercase border border-custom-amber/20 shadow-inner">
                            <span class="w-2 h-2 rounded-full bg-custom-amber animate-pulse"></span>
                            Membership Application
                        </div>
                        <h2 class="text-3xl md:text-4xl font-black mt-2 tracking-tight text-white uppercase drop-shadow-md">
                            Global Business <span class="text-transparent bg-clip-text bg-gradient-to-r from-custom-amber to-custom-amber-dark">& Startup Association</span>
                        </h2>
                    </div>
                    
                    <button id="closeIconBtn" type="button" class="text-gray-400 hover:text-custom-amber hover:bg-custom-blue/30 transition-all duration-300 focus:outline-none bg-custom-dark border border-custom-blue/50 p-2.5 rounded-full shadow-lg group">
                        <svg class="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- FORM WRAPS BOTH CONTENT AND FOOTER NOW -->
                <form id="membershipForm" class="flex flex-col flex-grow overflow-hidden">
                    
                    <!-- Scrollable Form Area -->
                    <div class="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-custom-dark/80 space-y-12">
                        
                        <!-- Section 1 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">1</span> 
                                Personal Information
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${createInput('Full Name', 'fullName', 'text', '', true)}
                                ${createInput('Date of Birth', 'dob', 'date', '', true)}
                                <div>
                                    <label class="block text-xs font-bold tracking-wide text-gray-300 uppercase mb-2">Gender <span class="text-red-500">*</span></label>
                                    <select id="gender" required class="w-full bg-custom-dark/80 border border-custom-blue/50 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-custom-amber focus:ring-2 focus:ring-custom-amber/20 transition-all duration-300 shadow-inner appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select Gender...</option>
                                        <option value="Male">Male</option><option value="Female">Female</option>
                                    </select>
                                </div>
                                ${createInput('Mobile Number', 'mobileNumber', 'tel', '', true)}
                                ${createInput('Email Address', 'emailAddress', 'email', '', true)}
                            </div>
                        </section>

                        <!-- Section 2 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">2</span> 
                                Address Details
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="md:col-span-2">${createInput('Complete Address', 'address', 'text', '', true)}</div>
                                ${createInput('City', 'city', 'text', '', true)}
                                ${createInput('State', 'state', 'text', '', true)}
                                ${createInput('PIN Code', 'pinCode', 'text', '', true)}
                                ${createInput('Country', 'country', 'text', '', true)}
                            </div>
                        </section>

                        <!-- Section 3 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">3</span> 
                                Professional Information
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${createInput('Organisation / Company Name', 'companyName', 'text', '', true)}
                                ${createInput('Industry / Sector', 'industry', 'text', '', true)}
                                ${createInput('Years of Experience', 'experience', 'number', '', true)}
                                ${createInput('Website (Optional)', 'website', 'url', 'https://', false)}
                            </div>
                        </section>

                        <!-- Section 4 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">4</span> 
                                Membership Category
                            </h3>
                            <div class="w-full md:w-2/3">
                                <select id="membershipCategory" required class="w-full bg-custom-dark border border-custom-blue rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-custom-amber focus:ring-2 focus:ring-custom-amber/20 transition-all duration-300 shadow-inner appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select Membership Type... *</option>
                                    <option value="Student Membership">Student Membership</option>
                                    <option value="Startup Membership">Startup Membership</option>
                                    <option value="MSME Membership">MSME Membership</option>
                                    <option value="Corporate Membership">Corporate Membership</option>
                                    <option value="NGO Membership">NGO Membership</option>
                                    <option value="Professional Membership">Professional Membership</option>
                                    <option value="International Membership">International Membership</option>
                                </select>
                            </div>
                        </section>

                        <!-- Section 5 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">5</span> 
                                Business Requirements
                            </h3>
                            <p class="text-gray-400 mb-5 text-sm">Select all areas where you require support or opportunities (Optional):</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                                ${[
            'Business Consulting', 'Funding Support', 'Government Schemes',
            'Import & Export', 'Tender & GeM Support', 'AI & Automation',
            'Skill Development', 'Branding & Marketing', 'Website & App Development',
            'Networking Opportunities', 'International Business Support'
        ].map(req => `
                                <label class="flex items-center space-x-4 cursor-pointer group p-2 rounded-lg hover:bg-custom-blue/20 transition-colors">
                                    <div class="relative flex items-center justify-center w-6 h-6 border-2 border-custom-blue bg-custom-dark rounded-md group-hover:border-custom-amber transition-all shadow-inner">
                                        <input type="checkbox" name="businessReq" value="${req}" class="absolute opacity-0 w-full h-full cursor-pointer peer" />
                                        <svg class="w-4 h-4 text-custom-amber opacity-0 peer-checked:opacity-100 transition-opacity transform scale-50 peer-checked:scale-100 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span class="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">${req}</span>
                                </label>
                                `).join('')}
                            </div>
                        </section>

                        <!-- Section 6 -->
                        <section class="bg-custom-blue/10 p-6 md:p-8 rounded-2xl border border-custom-blue/30">
                            <h3 class="text-lg md:text-xl font-bold text-custom-amber mb-6 flex items-center gap-3">
                                <span class="bg-custom-amber text-custom-dark w-8 h-8 flex items-center justify-center rounded-lg text-sm">6</span> 
                                Brief About Your Business
                            </h3>
                            <textarea id="briefProfile" required rows="5" class="w-full bg-custom-dark/80 border border-custom-blue/50 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-custom-amber focus:ring-2 focus:ring-custom-amber/20 transition-all duration-300 shadow-inner resize-y" placeholder="Describe your profile, vision, and what you do... *"></textarea>
                        </section>

                    </div>

                    <!-- Footer Segment -->
                    <div class="p-6 md:px-10 md:py-6 border-t border-custom-blue/50 bg-custom-dark/90 backdrop-blur-md flex-shrink-0 rounded-b-[2rem]">
                        <div class="flex flex-col sm:flex-row justify-end gap-5 items-center">
                            <button id="cancelBtn" type="button" class="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-custom-blue/80 hover:border-gray-300 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                                Cancel
                            </button>
                            <button id="confirmBtn" type="submit" class="w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-custom-amber to-custom-amber-dark hover:from-custom-amber-dark hover:to-custom-amber text-custom-dark font-extrabold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-custom-amber/50">
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalTemplate);
}

// Helper function
function createInput(label, id, type, placeholder = '', isRequired = false) {
    return `
        <div>
            <label class="block text-xs font-bold tracking-wide text-gray-300 uppercase mb-2">${label} ${isRequired ? '<span class="text-red-500">*</span>' : ''}</label>
            <input id="${id}" type="${type}" placeholder="${placeholder}" ${isRequired ? 'required' : ''} class="w-full bg-custom-dark/80 border border-custom-blue/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-custom-amber focus:ring-2 focus:ring-custom-amber/20 transition-all duration-300 shadow-inner invalid:border-red-500 invalid:ring-red-500/20">
        </div>
    `;
}

function setupModalLogic() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCard = document.getElementById('modalCard');
    const closeIconBtn = document.getElementById('closeIconBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('membershipForm');
    const confirmBtn = document.getElementById('confirmBtn');

    // Select ALL buttons with the class '.open-modal-btn'
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    function openModal() {
        modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
        modalOverlay.classList.add('opacity-100', 'pointer-events-auto');

        modalCard.classList.remove('scale-95');
        modalCard.classList.add('scale-100');
    }

    function closeModal() {
        modalOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        modalOverlay.classList.add('opacity-0', 'pointer-events-none');

        modalCard.classList.remove('scale-100');
        modalCard.classList.add('scale-95');
    }

    // Attach the openModal event listener to EVERY button found
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeIconBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const originalText = confirmBtn.innerText;
        confirmBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-custom-dark inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;
        confirmBtn.classList.add('opacity-90', 'cursor-not-allowed', 'pointer-events-none');

        const selectedReqs = Array.from(document.querySelectorAll('input[name="businessReq"]:checked')).map(cb => cb.value);
        const reqString = selectedReqs.length > 0 ? selectedReqs.join(', ') : 'None selected';

        const messageText = `*GLOBAL BUSINESS & STARTUP ASSOCIATION*
*New Membership Application*

*1. Personal Information*
- Name: ${document.getElementById('fullName').value}
- DOB: ${document.getElementById('dob').value}
- Gender: ${document.getElementById('gender').value}
- Mobile: ${document.getElementById('mobileNumber').value}
- Email: ${document.getElementById('emailAddress').value}

*2. Address Details*
- Address: ${document.getElementById('address').value}
- City: ${document.getElementById('city').value}
- State: ${document.getElementById('state').value}
- PIN: ${document.getElementById('pinCode').value}
- Country: ${document.getElementById('country').value}

*3. Professional Info*
- Company: ${document.getElementById('companyName').value}
- Industry: ${document.getElementById('industry').value}
- Experience: ${document.getElementById('experience').value} Years
- Website: ${document.getElementById('website').value || 'N/A'}

*4. Membership Category*
- Type: ${document.getElementById('membershipCategory').value}

*5. Business Requirements*
- ${reqString}

*6. Profile Brief*
${document.getElementById('briefProfile').value}`;

        const whatsappNumber = "919811033633";
        const encodedMessage = encodeURIComponent(messageText);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            closeModal();
            setTimeout(() => {
                confirmBtn.innerText = originalText;
                confirmBtn.classList.remove('opacity-90', 'cursor-not-allowed', 'pointer-events-none');
                form.reset();
            }, 300);
        }, 800);
    });

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modalOverlay.classList.contains('pointer-events-none')) {
            closeModal();
        }
    });
}


tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: '#0B192C',
                royalblue: '#1E3A8A',
                gold: '#F59E0B',
                golddark: '#D97706',
                'custom-dark': '#0B192C',
                'custom-blue': '#1E3A8A',
                'custom-amber': '#F59E0B',
                'custom-amber-dark': '#D97706',
            }
        }
    }
}