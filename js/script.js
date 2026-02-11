// ========== دکمه بازگشت به بالا ==========
function initScrollToTop() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    
    if (!scrollBtn) return;
    
    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };
    
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ========== بستن منوی موبایل بعد از کلیک ==========
function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    if (!menuToggle) return;
    
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                menuToggle.checked = false;
            }
        });
    });
}

// ========== انیمیشن اسکرول ==========
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

// ========== فرم تماس (اگر وجود داشت) ==========
function initContactForm() {
    const contactForm = document.querySelector(".contact-form");
    
    if (!contactForm) return;
    
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // شبیه‌سازی ارسال فرم
        const submitBtn = contactForm.querySelector(".submit-btn");
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert("✅ Your message has been sent successfully!");
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// ========== گالری لایت‌باکس ساده ==========
function initGalleryLightbox() {
    const galleryImages = document.querySelectorAll(".gallery-item img");
    
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            const src = this.src;
            const alt = this.alt;
            
            // ساخت المان لایت‌باکس
            const lightbox = document.createElement("div");
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            `;
            
            const imgElement = document.createElement("img");
            imgElement.src = src;
            imgElement.alt = alt;
            imgElement.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 8px;
            `;
            
            lightbox.appendChild(imgElement);
            lightbox.addEventListener("click", () => lightbox.remove());
            document.body.appendChild(lightbox);
        });
    });
}

// ========== اجرای توابع ==========
document.addEventListener("DOMContentLoaded", () => {
    initScrollToTop();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initGalleryLightbox();
    
    console.log("✅ BasuCompt Script Loaded Successfully!");
});