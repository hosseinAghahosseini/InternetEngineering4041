// داده‌های بلاگ - فقط ۲ پست
const blogPosts = [
    {
        id: "responsive-design",
        title: "Responsive Design Best Practices",
        desc: "How to create websites that look great on all devices - from mobile to desktop. Learn about flexible grids, media queries, and mobile-first approach.",
        fullContent: "Responsive web design is essential in today's multi-device world. This article covers everything from viewport meta tags to CSS Grid and Flexbox implementations. We'll explore real-world examples and common pitfalls to avoid.",
        date: "2026-02-08",
        author: "Mohammadreza Hadi",
        authorLink: "SinglePeople-Mohammadreza.html",
        link: "SingleBlog-Responsive.html",
        readTime: "6 min",
        category: "CSS"
    },
    {
        id: "javascript-es6",
        title: "JavaScript ES6+ Features",
        desc: "Modern JavaScript features that every developer should know in 2026. From arrow functions to async/await and modules.",
        fullContent: "ECMAScript 2015 (ES6) revolutionized JavaScript development. This guide covers let/const, template literals, destructuring, spread/rest operators, promises, and modern syntax that makes code cleaner and more efficient.",
        date: "2026-02-05",
        author: "Hossein Aghahosseini",
        authorLink: "SinglePeople-Hossein.html",
        link: "SingleBlog-JavaScript.html",
        readTime: "8 min",
        category: "JavaScript"
    }
];

const blogContainer = document.querySelector("#blog-posts");

if (blogContainer) {
    blogContainer.innerHTML = ''; // پاک کردن محتوای قبلی
    
    blogPosts.forEach(post => {
        const article = document.createElement("article");
        article.className = "blog-post";
        
        article.innerHTML = `
            <h2>${post.title}</h2>
            <div style="display: flex; gap: 20px; margin-bottom: 15px; color: hsl(var(--muted-foreground)); flex-wrap: wrap;">
                <span>📅 ${post.date}</span>
                <span>✍️ <a href="${post.authorLink}" style="color: hsl(var(--primary-light)); text-decoration: none;">${post.author}</a></span>
                <span>⏱️ ${post.readTime}</span>
                <span>🏷️ ${post.category}</span>
            </div>
            <p>${post.desc}</p>
            <a href="${post.link}" class="read-more">Read Full Article →</a>
        `;
        
        blogContainer.appendChild(article);
    });
}