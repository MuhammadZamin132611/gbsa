
// 1. Define your structured data with object parameters containing names and URLs
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

const thirdTreeData = [
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
]

const firstrootContainer = document.getElementById('first-tree-root-container');
const secondrootContainer = document.getElementById('second-tree-root-container');
const thirdrootContainer = document.getElementById('third-tree-root-container');

// Recursive function to parse and generate infinite level tree arrays
function buildTreeNodes(nodes) {
    return nodes.map(node => {
        // Check if this object is a subcategory header (has .title) or a leaf node link (has .link)
        if (node.title) {
            return `
                    <div class="relative tree-line pt-2 pb-1">
                        <span class="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                            ${node.title}
                        </span>
                        <div class="relative tree-container ml-2 pl-4 mt-1">
                            ${buildTreeNodes(node.items)}
                        </div>
                    </div>
                `;
        } else {
            return `
                    <div class="relative tree-line py-1.5 flex items-center group cursor-pointer">
                        <a href="${node.link}" class="w-full text-sm md:text-base font-medium text-slate-700 hover:text-indigo-600 hover:translate-x-1 transition-all duration-200 block">
                            ${node.name}
                        </a>
                    </div>
                `;
        }
    }).join('');
}

// Initialize root mapping layout structure
const firstfullTreeHTML = firstTreeData.map(category => `
        <div>
            <div class="mb-3">
                <h2 class="text-base md:text-xl font-bold text-slate-800 tracking-tight">
                    ${category.title}
                </h2>
            </div>
            <div class="relative tree-container ml-2 pl-4">
                ${buildTreeNodes(category.items)}
            </div>
        </div>
    `).join('');

// Initialize root mapping layout structure
const secondfullTreeHTML = secondTreeData.map(category => `
        <div>
            <div class="mb-3">
                <h2 class="text-base md:text-xl font-bold text-slate-800 tracking-tight">
                    ${category.title}
                </h2>
            </div>
            <div class="relative tree-container ml-2 pl-4">
                ${buildTreeNodes(category.items)}
            </div>
        </div>
    `).join('');

// Initialize root mapping layout structure
const thirdfullTreeHTML = thirdTreeData.map(category => `
        <div>
            <div class="mb-3">
                <h2 class="text-base md:text-xl font-bold text-slate-800 tracking-tight">
                    ${category.title}
                </h2>
            </div>
            <div class="relative tree-container ml-2 pl-4">
                ${buildTreeNodes(category.items)}
            </div>
        </div>
    `).join('');

// Inject complete tree code block into UI
firstrootContainer.innerHTML = firstfullTreeHTML;
secondrootContainer.innerHTML = secondfullTreeHTML;
thirdrootContainer.innerHTML = thirdfullTreeHTML;