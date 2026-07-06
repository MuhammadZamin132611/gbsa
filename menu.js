document.addEventListener("DOMContentLoaded", () => {
    // 1. Normalized Object Array Schema
    const servicesMenu = [
        {
            title: "Government Scheme",
            items: [
                {
                    name: "Agriculture Scheme",
                    link: "/governmentSchemes/aggriculture.html"
                },
                {
                    name: "Women Empower",
                    link: "/governmentSchemes/womenEmpower.html"
                },
                {
                    name: "Skill India",
                    link: "/governmentSchemes/skillIndia.html"
                },
                {
                    name: "Pashupalan",
                    link: "/governmentSchemes/pashupalan.html"
                },
                {
                    name: "MSME Loan",
                    link: "/governmentSchemes/msmeLoan.html"
                },
                {
                    name: "Employment",
                    link: "/governmentSchemes/employment.html"
                },
                {
                    name: "FSSAI",
                    link: "/governmentSchemes/fssai.html"
                },
                {
                    name: "Cooperatives Scheme",
                    link: "/governmentSchemes/cooperativesScheme.html"
                }
            ]
        },
        {
            title: "CSR Scheme",
            items: [
                {
                    name: "Government Organizations",
                    link: "/organization/governmentOrganizations.html"
                },
                {
                    name: "Private Organizations",
                    link: "/organization/privateOrganizations.html"
                }
            ]
        },
        {
            title: "Business Development",
            items: [
                {
                    title: "Business Strategy & Expansion",
                    items: [
                        {
                            name: "Startup & Business Consulting",
                            link: "/businessDevelopment/businessStrategyExpansion/startupBusinessConsulting.html"
                        },
                        {
                            name: "Business Growth & Scaling Strategy",
                            link: "/businessDevelopment/businessStrategyExpansion/BusinessGrowthScalingStrategy.html"
                        },
                        {
                            name: "Franchise Development & Expansion",
                            link: "/businessDevelopment/businessStrategyExpansion/franchiseDevelopmentExpansion.html"
                        },
                        {
                            name: "Investor & Funding Support",
                            link: "/businessDevelopment/businessStrategyExpansion/investorFundingSupport.html"
                        },
                        {
                            name: "Founder & Leadership Coaching",
                            link: "/businessDevelopment/businessStrategyExpansion/founderLeadershipCoaching.html"
                        },
                    ]
                },
                {
                    title: "Branding, Marketing & Lead Generation",
                    items: [
                        {
                            name: "Branding, Marketing & Digital Growth",
                            link: "/businessDevelopment/brandingMarketingLeadGeneration/brandingMarketingDigitalGrowth.html"
                        },
                        {
                            name: "PR, Marketing & Podcast Promotion",
                            link: "/businessDevelopment/brandingMarketingLeadGeneration/PRMarketingPodcastPromotion.html"
                        },
                        {
                            name: "Ads & Lead Generation",
                            link: "/businessDevelopment/brandingMarketingLeadGeneration/adsLeadGeneration.html"
                        },
                        {
                            name: "Video Marketing & Training",
                            link: "/businessDevelopment/brandingMarketingLeadGeneration/videoMarketingTraining.html"
                        },
                    ]
                },
                {
                    title: "Technology & Automation Solutions",
                    items: [
                        {
                            name: "Website & Mobile App Development",
                            link: "/businessDevelopment/technologyAutomationSolutions/websiteMobileAppDevelopment.html"
                        },
                        {
                            name: "WhatsApp API & Marketing Automation",
                            link: "/businessDevelopment/technologyAutomationSolutions/whatsAppAPIMarketingAutomation.html"
                        },
                        {
                            name: "IVR, CRM & Voice Marketing Systems",
                            link: "/businessDevelopment/technologyAutomationSolutions/IVRCRMVoiceMarketingSystems.html"
                        },
                        {
                            name: "Operations, Systems & Process Setup",
                            link: "/businessDevelopment/technologyAutomationSolutions/operationsSystemsProcessSetup.html"
                        },
                    ]
                },
                {
                    title: "Corporate Events & Recognition",
                    items: [
                        {
                            name: "Events & Awards Show Management",
                            link: "/businessDevelopment/corporateEventsRecognition/eventsAwardsShowManagement.html"
                        },
                    ]
                },
            ]
        },
        {
            title: "Import & Export",
            items: [
                {
                    name: "Import & Export Consultancy",
                    link: "/"
                },
                {
                    name: "Import & Export IEC Registration",
                    link: "/"
                },
                {
                    name: "DGFT Registration & Services",
                    link: "/"
                },
                {
                    name: "Paid Finance Consultancy",
                    link: "/"
                },
                {
                    name: "Export Credit Asistance",
                    link: "/"
                },
                {
                    name: "International Business Setup",
                    link: "/"
                },
                {
                    name: "International B2B Lead Generation",
                    link: "/"
                },
                {
                    name: "End-to-End Import & Export Project Management",
                    link: "/"
                },
            ]
        },
        {
            title: "International Business & Trade Law",
            items: [
                {
                    name: "Export & Trade Contracts",
                    link: "/internationalBusinessTradeLaw/exportTradeContracts.html"
                },
                {
                    name: "International Business Negotiation",
                    link: "/internationalBusinessTradeLaw/internationalBusinessNegotiation.html"
                },
                {
                    name: "Cross Border Risk Management",
                    link: "/internationalBusinessTradeLaw/crossBorderRiskManagement.html"
                },
                {
                    name: "Contract Dispute Resolution",
                    link: "/internationalBusinessTradeLaw/contractDisputeResolution.html"
                },
                {
                    name: "Complaince & Regulatory Advisory",
                    link: "/internationalBusinessTradeLaw/complainceRegulatoryAdvisory.html"
                },
                {
                    name: "OME & Exporter Legal Support",
                    link: "/internationalBusinessTradeLaw/OMEExporterLegalSupport.html"
                },
            ]
        },
        {
            title: "Investment Banking",
            items: [
                {
                    name: "Fund Raising",
                    link: "/"

                },
                {
                    name: "Mergers & Acquisitions (M&A)",
                    link: "/"
                },
                {
                    name: "Capital Market Services",
                    link: "/"
                },
                {
                    name: "Corporate Advisory",
                    link: "/"
                },
                {
                    name: "Valuation Services",
                    link: "/"
                },
                {
                    name: "Transaction Advisory",
                    link: "/"
                },
                {
                    name: "Loan & Finance Advisory",
                    link: "/"
                },
                {
                    name: "Startup & Growth Advisory",
                    link: "/"
                },
                {
                    name: "Cross-Border Advisory",
                    link: "/"
                },
            ]
        },
        {
            title: "Accounting Services & Registration",
            items: [
                {
                    name: "Taxation Services",
                    link: "/accountingServicesRegistration/taxationServices.html"
                },
                {
                    name: "Company Compliance",
                    link: "/accountingServicesRegistration/companyCompliance.html"
                },
                {
                    name: "Financial Management",
                    link: "/accountingServicesRegistration/financialManagement.html"
                },
                {
                    name: "Audit Support",
                    link: "/accountingServicesRegistration/auditSupport.html"
                },
            ]
        },
        {
            title: "Traning & Placement Asistance",
            items: [
                {
                    name: "Fund Raising",
                    link: "/"

                },
            ]
        }

    ];

   // Get current path route (e.g., "/header.html")
    const currentPath = window.location.pathname;

    // --- HIGHLIGHT ENGINE UTILITIES ---
    function highlightStaticLinks() {
        // Highlight active layout components inside Desktop Nav
        document.querySelectorAll("#desktopNavLinks a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("text-red-500", "border-red-500");
                link.classList.remove("text-gray-700", "border-transparent");
            }
        });

        // Highlight active layout components inside Mobile Nav Panel
        document.querySelectorAll("#mobileNavLinks > a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("text-red-500", "bg-red-50");
                link.classList.remove("text-gray-700");
            }
        });
    }

    function checkAndHighlightMegaMenuLinks() {
        let hasActiveChild = false;
        
        document.querySelectorAll("#megaMenu a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                // Highlight active link inside dark mega menu
                link.classList.add("text-red-500", "font-semibold");
                link.classList.remove("text-gray-300");
                hasActiveChild = true;
            }
        });

        // If a nested child link is active, keep the parent desktop 'Services' button highlighted
        const servicesBtn = document.getElementById("servicesBtn");
        if (hasActiveChild && servicesBtn) {
            servicesBtn.classList.add("text-red-500");
        }
    }

    function checkAndHighlightMobileDynamicLinks() {
        document.querySelectorAll("#mobileServicesContainer a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("text-red-500", "bg-red-50", "font-medium");
                
                // Automatically auto-expand parent categories if child is active
                let parentContent = link.closest(".mobile-sub-content");
                while (parentContent) {
                    parentContent.classList.remove("hidden");
                    const toggleBtn = parentContent.previousElementSibling;
                    if (toggleBtn && toggleBtn.classList.contains("mobile-toggle-btn")) {
                        toggleBtn.querySelector("svg")?.classList.add("rotate-180");
                    }
                    // Keep walking up tree if double nested
                    const grandparent = parentContent.parentElement.closest(".mobile-sub-content");
                    parentContent = grandparent;
                }

                // Expand main level panel container
                const masterContent = document.getElementById("mobileMasterContent");
                const masterArrow = document.getElementById("mobileMasterArrow");
                if (masterContent && masterArrow) {
                    masterContent.classList.remove("hidden");
                    masterArrow.classList.add("rotate-180");
                    document.getElementById("mobileMasterServicesBtn")?.classList.add("text-red-500");
                }
            }
        });
    }

    // --- DOM ELEMENT REFERENCES ---
    const servicesBtn = document.getElementById("servicesBtn");
    const megaMenu = document.getElementById("megaMenu");
    const servicesArrow = document.getElementById("servicesArrow");
    
    const mainMenuEl = document.getElementById("mainMenu");
    const categoryMenuEl = document.getElementById("categoryMenu");
    const linksMenuEl = document.getElementById("linksMenu");

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileMenuIcon = document.getElementById("mobileMenuIcon");
    const mobileServicesContainer = document.getElementById("mobileServicesContainer");

    // Run basic validation logic setups
    highlightStaticLinks();

    // --- DESKTOP LOGIC CONTROLLER ---
    if (servicesBtn && megaMenu) {
        servicesBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = !megaMenu.classList.contains("hidden");
            if (isOpen) {
                closeMegaMenu();
            } else {
                megaMenu.classList.remove("hidden");
                servicesArrow?.classList.add("rotate-180");
                renderFirstLevel();
            }
        });

        document.addEventListener("click", (e) => {
            if (!megaMenu.contains(e.target) && !servicesBtn.contains(e.target)) {
                closeMegaMenu();
            }
        });
    }

    function closeMegaMenu() {
        megaMenu.classList.add("hidden");
        servicesArrow?.classList.remove("rotate-180");
        categoryMenuEl?.classList.add("hidden");
        linksMenuEl?.classList.add("hidden");
    }

    function renderFirstLevel() {
        if (!mainMenuEl) return;
        mainMenuEl.innerHTML = servicesMenu.map((item, index) => {
            if (item.items) {
                return `<button data-idx="${index}" class="lvl1-btn text-left py-2 px-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white flex justify-between items-center transition-all w-full">
                    <span>${item.title}</span> <span class="text-xs">→</span>
                </button>`;
            }
            return `<a href="${item.link}" class="block py-2 px-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-all w-full">${item.title || item.name}</a>`;
        }).join("");

        checkAndHighlightMegaMenuLinks();

        document.querySelectorAll(".lvl1-btn").forEach(btn => {
            btn.addEventListener("mouseenter", (e) => {
                const idx = e.currentTarget.getAttribute("data-idx");
                renderSecondLevel(servicesMenu[idx].items);
            });
        });
    }

    function renderSecondLevel(subItems) {
        if (!categoryMenuEl) return;
        categoryMenuEl.classList.remove("hidden");
        if (linksMenuEl) linksMenuEl.classList.add("hidden"); 

        categoryMenuEl.innerHTML = subItems.map((item, index) => {
            if (item.items) {
                return `<button data-subidx="${index}" class="lvl2-btn text-left py-2 px-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white flex justify-between items-center transition-all w-full">
                    <span>${item.title}</span> <span class="text-xs">→</span>
                </button>`;
            }
            return `<a href="${item.link}" class="block py-2 px-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-all w-full">${item.name}</a>`;
        }).join("");

        checkAndHighlightMegaMenuLinks();

        document.querySelectorAll(".lvl2-btn").forEach(btn => {
            btn.addEventListener("mouseenter", (e) => {
                const subIdx = e.currentTarget.getAttribute("data-subidx");
                renderThirdLevel(subItems[subIdx].items);
            });
        });
    }

    function renderThirdLevel(deepItems) {
        if (!linksMenuEl) return;
        linksMenuEl.classList.remove("hidden");
        linksMenuEl.innerHTML = deepItems.map(item => {
            return `<a href="${item.link}" class="block py-2 px-3 rounded hover:bg-gray-800 text-gray-300 hover:text-white transition-all w-full">${item.name}</a>`;
        }).join("");

        checkAndHighlightMegaMenuLinks();
    }


    // --- MOBILE LOGIC CONTROLLER ---
    if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
        mobileMenuBtn.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.toggle("hidden");
            if (!isHidden) {
                mobileMenuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
            } else {
                mobileMenuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
            }
        });
    }

    function generateMobileTreeHTML(items) {
        return items.map(item => {
            if (item.items) {
                return `
                    <div class="w-full pl-2 mt-2 border-l-2 border-gray-200">
                        <button class="mobile-toggle-btn w-full py-2.5 px-3 flex justify-between items-center text-left text-gray-700 bg-gray-50 rounded hover:bg-gray-100 font-medium transition-colors">
                            <span>${item.title}</span>
                            <svg class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                        </button>
                        <div class="mobile-sub-content hidden flex flex-col gap-1 mt-1 pl-2">
                            ${generateMobileTreeHTML(item.items)}
                        </div>
                    </div>
                `;
            }
            return `
                <a href="${item.link}" class="block py-2 px-4 text-sm text-gray-600 hover:text-red-500 hover:bg-gray-50 rounded transition-all">
                    ${item.name || item.title}
                </a>
            `;
        }).join("");
    }

    if (mobileServicesContainer) {
        mobileServicesContainer.innerHTML = `
            <button id="mobileMasterServicesBtn" class="w-full pl-4 py-2 flex justify-between items-center text-left font-semibold border-b border-gray-100 hover:text-red-500 transition-colors">
                <span>Services</span>
                <svg id="mobileMasterArrow" class="w-4 h-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobileMasterContent" class="hidden flex flex-col gap-1 mt-2">
                ${generateMobileTreeHTML(servicesMenu)}
            </div>
        `;

        const masterBtn = document.getElementById("mobileMasterServicesBtn");
        const masterContent = document.getElementById("mobileMasterContent");
        const masterArrow = document.getElementById("mobileMasterArrow");

        if (masterBtn && masterContent && masterArrow) {
            masterBtn.addEventListener("click", () => {
                masterContent.classList.toggle("hidden");
                masterArrow.classList.toggle("rotate-180");
            });
        }

        // Run checking filter rules inside mobile accordion trees
        checkAndHighlightMobileDynamicLinks();

        // Event delegation listener monitoring inside sub panels
        masterContent.addEventListener("click", (e) => {
            const btn = e.target.closest(".mobile-toggle-btn");
            if (!btn) return;
            
            const dropdown = btn.nextElementSibling;
            const icon = btn.querySelector("svg");
            
            if (dropdown) dropdown.classList.toggle("hidden");
            if (icon) icon.classList.toggle("rotate-180");
        });
    }
});