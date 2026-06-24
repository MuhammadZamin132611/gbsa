document.addEventListener("DOMContentLoaded", () => {

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
                    title: "Business Development",
                    items: [
                        {
                            name: "Universities",
                            link: "/institutes/universities.html"
                        },
                        {
                            name: "Training Institutes",
                            link: "/institutes/trainingInstitutes.html"
                        }
                    ]
                },
                {
                    title: "Gram to sadan",
                    items: [
                        {
                            name: "Planning",
                            link: "/institutes/planning.html"
                        },
                        {
                            name: "Training",
                            link: "/institutes/training.html"
                        }
                    ]
                }
            ]
        }
    ];

    /* ==========================
       DESKTOP RENDER FUNCTION
    ========================== */

    function renderDesktopItems(items) {

        return items.map(item => {

            if (item.items) {

                return `
                    <div class="nested-menu relative">

                        <button class="nested-btn w-full px-4 py-3 flex justify-between items-center hover:bg-blue-50">

                            ${item.title}

                            <i class="fa-solid fa-chevron-right text-xs"></i>

                        </button>

                        <div class="nested-dropdown hidden absolute right-full top-0 w-72 bg-white border shadow-lg rounded-lg">

                            ${renderDesktopItems(item.items)}

                        </div>

                    </div>
                `;
            }

            return `
                <a href="${item.link}"
                   class="block px-4 py-3 hover:bg-blue-50">
                    ${item.name}
                </a>
            `;

        }).join("");
    }

    /* ==========================
       MOBILE RENDER FUNCTION
    ========================== */

    function renderMobileItems(items) {

        return items.map(item => {

            if (item.items) {

                return `
                    <div class="border-t">

                        <button
                            class="mobile-nested-btn w-full px-6 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200">

                            ${item.title}

                            <i class="fa-solid fa-angle-down transition-transform duration-300"></i>

                        </button>

                        <div class="mobile-nested-content hidden">

                            ${renderMobileItems(item.items)}

                        </div>

                    </div>
                `;
            }

            return `
                <a href="${item.link}"
                   class="block px-10 py-3 border-t hover:bg-white">
                    ${item.name}
                </a>
            `;

        }).join("");
    }

    /* ==========================
       DESKTOP SERVICES MENU
    ========================== */

    const consultingDropdown =
        document.getElementById("consultingDropdown");

    if (consultingDropdown) {

        consultingDropdown.innerHTML = servicesMenu.map(category => `

            <div class="menu-item relative border-b last:border-b-0">

                <button
                    class="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-blue-50">

                    ${category.title}

                    <i class="fa-solid fa-chevron-right"></i>

                </button>

                <div
                    class="submenu hidden absolute right-full top-0 w-72 bg-white border shadow-xl rounded-lg z-50">

                    ${renderDesktopItems(category.items)}

                </div>

            </div>

        `).join("");

        const consultingMenu =
            document.getElementById("consultingMenu");

        if (consultingMenu) {

            consultingMenu.addEventListener("mouseenter", () => {
                consultingDropdown.classList.remove("hidden");
            });

            consultingMenu.addEventListener("mouseleave", () => {
                consultingDropdown.classList.add("hidden");

                document
                    .querySelectorAll(".submenu,.nested-dropdown")
                    .forEach(menu => {
                        menu.classList.add("hidden");
                    });
            });
        }

        document.querySelectorAll(".menu-item").forEach(item => {

            const submenu =
                item.querySelector(".submenu");

            item.addEventListener("mouseenter", () => {
                submenu.classList.remove("hidden");
            });

            item.addEventListener("mouseleave", () => {
                submenu.classList.add("hidden");
            });

        });

        document.querySelectorAll(".nested-menu").forEach(item => {

            const submenu =
                item.querySelector(".nested-dropdown");

            item.addEventListener("mouseenter", () => {
                submenu.classList.remove("hidden");
            });

            item.addEventListener("mouseleave", () => {
                submenu.classList.add("hidden");
            });

        });
    }

    /* ==========================
       MOBILE MENU TOGGLE
    ========================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileMenuIcon =
        document.getElementById("mobileMenuIcon");

    if (
        mobileMenuBtn &&
        mobileMenu &&
        mobileMenuIcon
    ) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

            if (mobileMenu.classList.contains("hidden")) {

                mobileMenuIcon.classList.remove("fa-xmark");
                mobileMenuIcon.classList.add("fa-bars");

            } else {

                mobileMenuIcon.classList.remove("fa-bars");
                mobileMenuIcon.classList.add("fa-xmark");
            }

        });

    }

    /* ==========================
       MOBILE SERVICES MENU
    ========================== */

    const mobileServicesContainer =
        document.getElementById("mobileServicesContainer");

    if (mobileServicesContainer) {

        mobileServicesContainer.innerHTML = `

            <div class="border-b">

                <button
                    id="mobileServicesBtn"
                    class="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50">

                    Services

                    <i
                        id="mobileServicesIcon"
                        class="fa-solid fa-angle-down transition-transform duration-300">
                    </i>

                </button>

                <div
                    id="mobileServicesDropdown"
                    class="hidden bg-gray-50">

                    ${servicesMenu.map(category => `

                        <div class="border-t">

                            <button
                                class="category-btn w-full px-4 py-3 flex justify-between items-center bg-gray-100 font-semibold hover:bg-gray-200">

                                ${category.title}

                                <i class="fa-solid fa-angle-down transition-transform duration-300"></i>

                            </button>

                            <div class="category-content hidden">

                                ${renderMobileItems(category.items)}

                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>
        `;

        const mobileServicesBtn =
            document.getElementById("mobileServicesBtn");

        const mobileServicesDropdown =
            document.getElementById("mobileServicesDropdown");

        const mobileServicesIcon =
            document.getElementById("mobileServicesIcon");

        mobileServicesBtn.addEventListener("click", () => {

            mobileServicesDropdown.classList.toggle("hidden");
            mobileServicesIcon.classList.toggle("rotate-180");

        });

        document.querySelectorAll(".category-btn").forEach(btn => {

            btn.addEventListener("click", () => {

                const content =
                    btn.nextElementSibling;

                const icon =
                    btn.querySelector("i");

                content.classList.toggle("hidden");
                icon.classList.toggle("rotate-180");

            });

        });

        document.addEventListener("click", (e) => {

            const btn =
                e.target.closest(".mobile-nested-btn");

            if (!btn) return;

            const content =
                btn.nextElementSibling;

            const icon =
                btn.querySelector("i");

            content.classList.toggle("hidden");
            icon.classList.toggle("rotate-180");

        });

    }

});