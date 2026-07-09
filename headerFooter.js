const firstTreeData = [
    {
        title: "Government Scheme",
        items: [
            { name: "Agriculture Scheme", link: "/governmentSchemes/aggriculture.html" },
            { name: "Women Empower", link: "/governmentSchemes/womenEmpower.html" },
            { name: "Skill India", link: "/governmentSchemes/skillIndia.html" },
            { name: "Pashupalan", link: "/governmentSchemes/pashupalan.html" },
            { name: "MSME Loan", link: "/governmentSchemes/msmeLoan.html" },
            { name: "Employment", link: "/governmentSchemes/employment.html" },
            { name: "FSSAI", link: "/governmentSchemes/fssai.html" },
            { name: "Cooperatives Scheme", link: "/governmentSchemes/cooperativesScheme.html" }
        ]
    },
    {
        title: "CSR Scheme",
        items: [
            { name: "Government Organizations", link: "/organization/governmentOrganizations.html" },
            { name: "Private Organizations", link: "/organization/privateOrganizations.html" }
        ]
    },
    {
        title: "Business Development",
        items: [
            {
                title: "Business Strategy & Expansion",
                items: [
                    { name: "Startup & Business Consulting", link: "/businessDevelopment/businessStrategyExpansion/startupBusinessConsulting.html" },
                    { name: "Business Growth & Scaling Strategy", link: "/businessDevelopment/businessStrategyExpansion/BusinessGrowthScalingStrategy.html" },
                    { name: "Franchise Development & Expansion", link: "/businessDevelopment/businessStrategyExpansion/franchiseDevelopmentExpansion.html" },
                    { name: "Investor & Funding Support", link: "/businessDevelopment/businessStrategyExpansion/investorFundingSupport.html" },
                    { name: "Founder & Leadership Coaching", link: "/businessDevelopment/businessStrategyExpansion/founderLeadershipCoaching.html" },
                ]
            },
            {
                title: "Branding, Marketing & Lead Generation",
                items: [
                    { name: "Branding, Marketing & Digital Growth", link: "/businessDevelopment/brandingMarketingLeadGeneration/brandingMarketingDigitalGrowth.html" },
                    { name: "PR, Marketing & Podcast Promotion", link: "/businessDevelopment/brandingMarketingLeadGeneration/PRMarketingPodcastPromotion.html" },
                    { name: "Ads & Lead Generation", link: "/businessDevelopment/brandingMarketingLeadGeneration/adsLeadGeneration.html" },
                    { name: "Video Marketing & Training", link: "/businessDevelopment/brandingMarketingLeadGeneration/videoMarketingTraining.html" },
                ]
            },
            {
                title: "Technology & Automation Solutions",
                items: [
                    { name: "Website & Mobile App Development", link: "/businessDevelopment/technologyAutomationSolutions/websiteMobileAppDevelopment.html" },
                    { name: "WhatsApp API & Marketing Automation", link: "/businessDevelopment/technologyAutomationSolutions/whatsAppAPIMarketingAutomation.html" },
                    { name: "IVR, CRM & Voice Marketing Systems", link: "/businessDevelopment/technologyAutomationSolutions/IVRCRMVoiceMarketingSystems.html" },
                    { name: "Operations, Systems & Process Setup", link: "/businessDevelopment/technologyAutomationSolutions/operationsSystemsProcessSetup.html" },
                ]
            },
            {
                title: "Corporate Events & Recognition",
                items: [
                    { name: "Events & Awards Show Management", link: "/businessDevelopment/corporateEventsRecognition/eventsAwardsShowManagement.html" },
                ]
            },
        ]
    },
    {
        title: "Traning & Placement Asistance",
        items: [
            { name: "Skill Development Training", link: "/traningPlacement/skillDevelopmentTraining.html" },
            { name: "Technical Training", link: "/traningPlacement/technicalTraining.html" },
            { name: "Employability Training", link: "/traningPlacement/employabilityTraining.html" },
            { name: "Placement Services", link: "/traningPlacement/placementServices.html" },
            { name: "Corporate Training", link: "/traningPlacement/corporateTraining.html" },
            { name: "Internship Services", link: "/traningPlacement/internshipServices.html" },
            { name: "Career Services", link: "/traningPlacement/careerServices.html" },
            { name: "Recruitment Process Outsourcing (RPO)", link: "/traningPlacement/recruitmentProcessOutsourcing.html" },
            { name: "College Services", link: "/traningPlacement/collegeServices.html" },
            { name: "Certification Programs", link: "/traningPlacement/certificationPrograms.html" },
        ]
    },
];

const secondTreeData = [
    {
        title: "Import & Export",
        items: [
            { name: "Import & Export Consultancy", link: "/importExport/importExportConsultancy.html" },
            { name: "Import & Export IEC Registration", link: "/importExport/importExportIECRegistration.html" },
            { name: "DGFT Registration & Services", link: "/importExport/DGFTRegistrationServices.html" },
            { name: "Paid Finance Consultancy", link: "/importExport/paidFinanceConsultancy.html" },
            { name: "Export Credit Asistance", link: "/importExport/exportCreditAsistance.html" },
            { name: "International Business Setup", link: "/importExport/internationalBusinessSetup.html" },
            { name: "International B2B Lead Generation", link: "/importExport/internationalB2BLeadGeneration.html" },
            { name: "End-to-End Import & Export Project Management", link: "/importExport/endToEndImportExportProjectManagement.html" },
        ]
    },
    {
        title: "International Business & Trade Law",
        items: [
            { name: "Export & Trade Contracts", link: "/internationalBusinessTradeLaw/exportTradeContracts.html" },
            { name: "International Business Negotiation", link: "/internationalBusinessTradeLaw/internationalBusinessNegotiation.html" },
            { name: "Cross Border Risk Management", link: "/internationalBusinessTradeLaw/crossBorderRiskManagement.html" },
            { name: "Contract Dispute Resolution", link: "/internationalBusinessTradeLaw/contractDisputeResolution.html" },
            { name: "Complaince & Regulatory Advisory", link: "/internationalBusinessTradeLaw/complainceRegulatoryAdvisory.html" },
            { name: "OME & Exporter Legal Support", link: "/internationalBusinessTradeLaw/OMEExporterLegalSupport.html" },
        ]
    },
    {
        title: "Investment Banking",
        items: [
            { name: "Fund Raising", link: "/investmentBanking/fundRaising.html" },
            { name: "Mergers & Acquisitions (M&A)", link: "/investmentBanking/mergersAcquisitions.html" },
            { name: "Capital Market Services", link: "/investmentBanking/capitalMarketServices.html" },
            { name: "Corporate Advisory", link: "/investmentBanking/corporateAdvisory.html" },
            { name: "Valuation Services", link: "/investmentBanking/valuationServices.html" },
            { name: "Transaction Advisory", link: "/investmentBanking/transactionAdvisory.html" },
            { name: "Loan & Finance Advisory", link: "/investmentBanking/loanFinanceAdvisory.html" },
            { name: "Startup & Growth Advisory", link: "/investmentBanking/startupGrowthAdvisory.html" },
            { name: "Cross-Border Advisory", link: "/investmentBanking/crossBorderAdvisory.html" },
        ]
    },
    {
        title: "Accounting Services & Registration",
        items: [
            { name: "Taxation Services", link: "/accountingServicesRegistration/taxationServices.html" },
            { name: "Company Compliance", link: "/accountingServicesRegistration/companyCompliance.html" },
            { name: "Financial Management", link: "/accountingServicesRegistration/financialManagement.html" },
            { name: "Audit Support", link: "/accountingServicesRegistration/auditSupport.html" },
        ]
    },
];

const firstrootContainer = document.getElementById('first-tree-root-container');
const secondrootContainer = document.getElementById('second-tree-root-container');

// Recursive function to parse and generate infinite level tree structures
function buildTreeNodes(nodes) {
    return nodes.map(node => {
        if (node.title) {
            return `
                <div class="relative tree-line pt-2">
                    <span class="tree-toggle text-sm font-semibold text-slate-300 uppercase tracking-wider block mb-1 cursor-pointer hover:text-indigo-400 transition-colors duration-200">
                        <i class="fa-solid fa-angle-right mr-1"></i> ${node.title}
                    </span>
                    <div class="relative tree-container ml-2 pl-4 hidden border-l border-slate-700">
                        ${buildTreeNodes(node.items)}
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="relative tree-line py-1 flex items-center">
                    <a href="${node.link}" class="w-full text-sm font-medium text-slate-200 hover:text-indigo-400 hover:translate-x-1 transition-all duration-200 block">
                        • ${node.name}
                    </a>
                </div>
            `;
        }
    }).join('');
}

// Render logic for Root Categories
const generateRootHTML = (data) => data.map(category => `
    <div class="tree-branch mb-2">
        <div>
            <h2 class="tree-toggle whitespace-nowrap text-sm md:text-base font-semibold tracking-tight cursor-pointer hover:text-indigo-400 transition-colors duration-200">
                <i class="fa-solid fa-angle-right mr-1"></i> ${category.title}
            </h2>
        </div>
        <div class="relative tree-container ml-2 pl-4 hidden border-l border-slate-600 mt-1">
            ${buildTreeNodes(category.items)}
        </div>
    </div>
`).join('');

// Inject generated structures into containers
if (firstrootContainer) firstrootContainer.innerHTML = generateRootHTML(firstTreeData);
if (secondrootContainer) secondrootContainer.innerHTML = generateRootHTML(secondTreeData);

// --- Fixed Event Delegation for Accordion Toggling ---
[firstrootContainer, secondrootContainer].forEach(container => {
    if (!container) return;

    container.addEventListener('click', function (e) {
        const toggleHeader = e.target.closest('.tree-toggle');
        if (!toggleHeader) return;

        // Resolve Target Dropdown Element cleanly based on where it was invoked
        let targetContainer = toggleHeader.nextElementSibling;
        if (!targetContainer || !targetContainer.classList.contains('tree-container')) {
            targetContainer = toggleHeader.parentElement.nextElementSibling;
        }

        if (targetContainer && targetContainer.classList.contains('tree-container')) {
            const isCurrentlyHidden = targetContainer.classList.contains('hidden');

            // Limit target context boundaries so deeper selections do not unexpectedly shut parent elements
            const scopeContainer = toggleHeader.closest('.tree-container') || container;

            // 1. Target and hide matching sibling nodes residing inside this exact wrapper layer
            const immediateDivs = Array.from(scopeContainer.querySelectorAll(':scope > div, :scope > .tree-line'));
            immediateDivs.forEach(div => {
                const childContainer = div.querySelector('.tree-container');
                if (childContainer && childContainer !== targetContainer) {
                    childContainer.classList.add('hidden');
                }
                const childToggle = div.querySelector('.tree-toggle .fa-solid');
                if (childToggle && childContainer !== targetContainer) {
                    childToggle.classList.remove('fa-angle-down');
                    childToggle.classList.add('fa-angle-right');
                }
            });

            // 2. Toggle current selection item
            const icon = toggleHeader.querySelector('.fa-solid');
            if (isCurrentlyHidden) {
                targetContainer.classList.remove('hidden');
                if (icon) {
                    icon.classList.remove('fa-angle-right');
                    icon.classList.add('fa-angle-down');
                }
            } else {
                targetContainer.classList.add('hidden');
                if (icon) {
                    icon.classList.remove('fa-angle-down');
                    icon.classList.add('fa-angle-right');
                }
            }
        }
    });
});