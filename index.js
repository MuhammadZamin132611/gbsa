document.addEventListener("DOMContentLoaded", function () {
    const sliderData = [
        {
            image: "/homeImages/empoweringBusinesses.jpg",
            line1: "Empowering Businesses.",
            line2: "Enabling Innovation.",
            subheading: "Global Business & Startup Association (GBSA) helps startups, MSMEs, entrepreneurs, NGOs, and corporates with business consulting, government projects, and digital transformation."
        },
        {
            image: "/homeImages/govermentScheme.jpg",
            line1: "Government Scheme &",
            line2: "Goverment Project Counsulting",
            subheading: "End-to-end consultancy for government schemes, subsidies, grants, and financial assistance."
        },
        {
            image: "/homeImages/businessDevelopment.jpg",
            line1: "Business Development",
            line2: "Startup & Consulting",
            subheading: "Strategic solutions to accelerate business growth, market expansion, and revenue generation."
        },
        {
            image: "/homeImages/ship.jpeg",
            line1: "Import & Export",
            line2: "International Trade",
            subheading: "Comprehensive assistance with international trade, documentation, compliance, and global market access."
        },
        {
            image: "/homeImages/internationalBusinessLaw.jpg",
            line1: "International Business",
            line2: "& Trade Law",
            subheading: "Professional guidance on international contracts, trade regulations, and legal compliance."
        },
        {
            image: "/homeImages/investment.jpg",
            line1: "Investment Banking",
            line2: "Funding & Subsidi Support",
            subheading: "Advisory services for project financing, debt funding, investor relations, and capital raising."
        },
        {
            image: "/homeImages/accountingServices.jpg",
            line1: "Accounting Services",
            line2: "& Registration",
            subheading: "Complete support for business registration, GST, taxation, accounting, and regulatory compliance."
        },
        {
            image: "/homeImages/traningPlacement.jpeg",
            line1: "Training",
            line2: "& Placement Assistance",
            subheading: "Industry-oriented training programs, skill development, and career placement support."
        },
        {
            image: "/homeImages/AI.jpeg",
            line1: "Artificial Intelligence &",
            line2: "Digital Transformation",
            subheading: "Industry-oriented training programs, skill development, and career placement support."
        },
    ];

    const bgContainer = document.getElementById("hero-bg-slider");
    const textContainer = document.getElementById("hero-text-slider");
    const subContainer = document.getElementById("hero-sub-slider");

    // GENERATE ELEMENTS
    sliderData.forEach((slide, index) => {
        const isActive = index === 0;

        // Background Images
        const bgDiv = document.createElement("div");
        bgDiv.className = `absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-40' : 'opacity-0'}`;
        bgDiv.style.backgroundImage = `url('${slide.image}')`;
        bgContainer.appendChild(bgDiv);

        // Headings - First slide remains static/relative to hold natural screen space, others overlay absolute
        const heading = document.createElement("h1");
        heading.className = `${isActive ? 'relative opacity-100 translate-y-0' : 'absolute inset-x-0 top-0 opacity-0 translate-y-4 pointer-events-none'} text-xl sm:text-2xl lg:text-5xl font-black tracking-tight leading-tight transition-all duration-1000 w-full`;
        heading.innerHTML = `${slide.line1}<br><span class="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">${slide.line2}</span>`;
        textContainer.appendChild(heading);

        // Subheadings
        const subParagraph = document.createElement("p");
        subParagraph.className = `${isActive ? 'relative opacity-100 translate-y-0' : 'absolute inset-x-0 top-0 opacity-0 translate-y-4 pointer-events-none'} text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed transition-all duration-1000 w-full`;
        subParagraph.textContent = slide.subheading;
        subContainer.appendChild(subParagraph);
    });

    // ENGINE SLIDER WITH TRANSITION SWAP FOR LAYOUT CONTEXT
    const bgSlides = bgContainer.children;
    const textSlides = textContainer.children;
    const subSlides = subContainer.children;
    let currentIndex = 0;

    function nextSlide() {
        // 1. Reset Current Slide (Swap layout type to absolute so it vanishes seamlessly)
        bgSlides[currentIndex].classList.replace("opacity-40", "opacity-0");

        textSlides[currentIndex].className = "absolute inset-x-0 top-0 opacity-0 translate-y-4 pointer-events-none text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-all duration-1000 w-full";
        subSlides[currentIndex].className = "absolute inset-x-0 top-0 opacity-0 translate-y-4 pointer-events-none text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed transition-all duration-1000 w-full";

        // Increment Loop Counter index
        currentIndex = (currentIndex + 1) % sliderData.length;

        // 2. Activate Next Slide (Convert back to relative structure to force the wrapper to adjust height)
        bgSlides[currentIndex].classList.replace("opacity-0", "opacity-40");

        textSlides[currentIndex].className = "relative opacity-100 translate-y-0 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight transition-all duration-1000 w-full";
        subSlides[currentIndex].className = "relative opacity-100 translate-y-0 text-sm sm:text-lg lg:text-xl text-slate-300 leading-relaxed transition-all duration-1000 w-full";
    }

    setInterval(nextSlide, 5000);
});