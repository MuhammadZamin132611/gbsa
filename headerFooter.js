
// 1. Define your structured data with object parameters containing names and URLs
const aiTreeData = {
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

};

// 2. DOM Elements Selection
const titleEl = document.getElementById('tree-title');
const containerEl = document.getElementById('tree-root');

// 3. Render Title
titleEl.textContent = aiTreeData.title;

// 4. Generate and Map Nodes using updated item objects
// Added <a> tag with block styling so the entire row area remains clickable
const treeHTML = aiTreeData.items.map(item => `
        <div class="relative tree-line py-2.5 flex items-center group cursor-pointer" data-item="${item.name}">
            <a href="${item.link}" class="w-full text-sm md:text-base font-medium group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200 block">
                ${item.name}
            </a>
        </div>
    `).join('');

// 5. Inject generated markup into DOM
containerEl.innerHTML = treeHTML;

// 6. Interactive Event Listener (Optional tracking/analytics)
containerEl.addEventListener('click', (event) => {
    const TargetNode = event.target.closest('.tree-line');
    if (TargetNode) {
        const selectedItem = TargetNode.getAttribute('data-item');
        console.log(`Navigating to section: ${selectedItem}`);
    }
});
