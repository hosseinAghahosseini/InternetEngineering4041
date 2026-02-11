// داده‌های رویدادها
const events = [
    {
        title: "Web Development Workshop",
        desc: "Hands-on workshop on modern web development with HTML5, CSS3, and JavaScript. Learn responsive design and modern CSS techniques.",
        date: "2026-03-15",
        time: "14:00 - 17:00",
        location: "Computer Engineering Department, Room 203",
        link: "SingleEvent-Workshop.html"
    },
    {
        title: "AI in Healthcare Seminar",
        desc: "Exploring the applications of artificial intelligence in modern healthcare. Guest speaker from Tehran University of Medical Sciences.",
        date: "2026-03-20",
        time: "10:00 - 12:30",
        location: "Online (Zoom)",
        link: "SingleEvent-AI.html"
    },
    {
        title: "Startup Weekend",
        desc: "48 hours of building innovative tech solutions with your team. Pitch, build, and launch!",
        date: "2026-03-25",
        time: "09:00 - 18:00 (3 days)",
        location: "Incubation Center",
        link: "SingleEvent-Startup.html"
    }
];

const eventsContainer = document.querySelector("#events-list");

if (eventsContainer) {
    eventsContainer.innerHTML = ''; // پاک کردن محتوای قبلی
    
    events.forEach(event => {
        const eventElement = document.createElement("article");
        eventElement.className = "event-item";
        
        eventElement.innerHTML = `
            <h2>${event.title}</h2>
            <div style="display: flex; gap: 25px; margin-bottom: 15px; color: hsl(var(--muted-foreground)); flex-wrap: wrap;">
                <span>📅 ${event.date}</span>
                <span>⏰ ${event.time}</span>
                <span>📍 ${event.location}</span>
            </div>
            <p>${event.desc}</p>
            <a href="${event.link}" class="event-link">View Event Details →</a>
        `;
        
        eventsContainer.appendChild(eventElement);
    });
}