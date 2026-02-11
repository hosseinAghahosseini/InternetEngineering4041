const people = [
    {
        id: "hossein-aghahosseini",
        name: "Eng. Hossein Aghahosseini",
        role: "Instructor",
        bio: "PhD student at Bu-Ali Sina University. Specialized in Web Technologies and Internet Engineering.",
        initials: "HA",
        blogUrl: "SinglePeople-AghaHosseini.html",
        interests: ["Web Development", "Computer Networks", "IoT"],
        email: "h.aghahosseini@basu.ac.ir",
        courses: ["Internet Engineering", "Web Programming", "Computer Networks"],
        fullBio: "Hossein Aghahosseini is a PhD candidate at Bu-Ali Sina University with over 8 years of teaching experience. His research focuses on Internet of Things and Network Security."
    },
    {
        id: "nazanin-seifi",
        name: "Nazanin Seifi",
        role: "Computer Engineering Student",
        bio: "Undergraduate student at Bu-Ali Sina University. Front-end developer and UI/UX enthusiast.",
        initials: "NS",
        blogUrl: "SinglePeople-Seifi.html",
        interests: ["Front-end", "UI/UX", "JavaScript"],
        email: "n.seifi@basu.ac.ir",
        courses: ["Web Development", "UI/UX Design", "JavaScript"],
        fullBio: "Nazanin is a third-year computer engineering student passionate about creating beautiful and user-friendly web interfaces. She has worked on several front-end projects."
    },
    {
        id: "mohammadreza-hadi",
        name: "Mohammadreza Hadi",
        role: "Computer Engineering Student",
        bio: "Computer Engineering Student at Bu-Ali Sina University, Hamedan | Interested in Software Development with C# and .NET",
        initials: "Mr_H",
        blogUrl: "SinglePeople-Hadi.html",
        interests: ["Back-end", "Front-end", "C#", ".NET", "SQL Server"],
        email: "mr.hadi@basu.ac.ir",
        courses: ["C# Programming", "ASP.NET Core", "Database Design"],
        fullBio: "Mohammadreza is a passionate software developer focused on building robust applications with C# and .NET technologies. He loves solving complex problems."
    },
    {//برای بقیه افراد کلاس مانند قسمت های بالا می توانند برای خود درست کنند.
        id: "empty",
        name: "-- -- --",
        role: "-- -- --",
        bio: "-- --- --",
        initials: "--",
        blogUrl: "#",
        interests: ["--"],
        email: "",
        courses: [],
        fullBio: ""
    }
];

const grid = document.getElementById("people-grid");

if (grid) {
    people.forEach((p) => {
        if (p.name !== "-- -- --") { // فقط افراد واقعی نمایش داده شوند
            const card = document.createElement("article");
            card.className = "person-card";

            const interestsHTML = p.interests 
                ? `<div class="interests" style="margin: 15px 0; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                    ${p.interests.map(i => `<span style="background: hsl(var(--primary) / 0.2); padding: 5px 12px; border-radius: 20px; font-size: 12px; color: hsl(var(--primary-light));">${i}</span>`).join('')}
                   </div>`
                : '';

            card.innerHTML = `
                <div class="avatar">${p.initials}</div>
                <h3>${p.name}</h3>
                <span class="role">${p.role}</span>
                <p class="bio">${p.bio}</p>
                ${interestsHTML}
                <a class="blog-link" href="${p.blogUrl}">View Profile →</a>
            `;

            grid.appendChild(card);
        }
    });
}