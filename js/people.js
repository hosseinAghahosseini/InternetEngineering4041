const people = [
  {
    name: "Eng. Hossein Aghahosseini",
    role: "Instructor",
    bio: "PhD. student at Bu-Ali Sina University.",
    initials: "HA",
    blogUrl: "SinglePeople.html",
  },
  {
    name: "Nazanin Seifi",
    role: "Computer Engineering Student",
    bio: "Undergraduate student at Bu-Ali Sina University.",
    initials: "NS",
    blogUrl: "SinglePeople.html",
  },
  // add your info here
];

const grid = document.getElementById("people-grid");

people.forEach((p) => {
  const card = document.createElement("article");
  card.className = "person-card";

  card.innerHTML = `
    <div class="avatar">${p.initials}</div>
    <h3>${p.name}</h3>
    <span class="role">${p.role}</span>
    <p class="bio">${p.bio}</p>
    <a class="blog-link" href="${p.blogUrl}" target="_blank">Visit Blog ↗</a>
  `;

  grid.appendChild(card);
});

