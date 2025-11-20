let users = [
  {
    fullName: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1763598363324-cd072a67dc61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Frontend Developer",
    description:
      "Aarav is a frontend dev who loves building clean UIs and smooth user experiences with React and modern CSS.",
    tags: ["JavaScript", "React", "UI/UX", "Frontend"]
  },
  {
    fullName: "Sara Khan",
    image: "https://images.unsplash.com/photo-1762793193633-c26f3d34e710?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Product Designer",
    description:
      "Sara focuses on user-centered design, wireframing, and prototyping to create intuitive digital products.",
    tags: ["Figma", "Design Systems", "Prototyping", "UX"]
  },
  {
    fullName: "Rohan Patel",
    image: "https://plus.unsplash.com/premium_photo-1763120205098-109a904a9848?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Full Stack Developer",
    description:
      "Rohan works across the stack, from REST APIs to responsive frontends, and enjoys optimizing performance.",
    tags: ["Node.js", "Express", "MongoDB", "React"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://plus.unsplash.com/premium_photo-1763422783904-7e5ec2ad76bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Mobile App Developer",
    description:
      "Kabir builds high-quality cross-platform mobile apps with a focus on performance and usability.",
    tags: ["Flutter", "Dart", "Mobile", "Performance"]
  }
];

var main = document.querySelector('main')
let sum = ""

users.forEach((users) => {
    sum += `<div class="card">
            <img src=${users.image} alt="${users.fullName}">
            <h2>${users.fullName}</h2>
            <h3>${users.profession}</h3>
            <h4>${users.description}</h4>
        </div>`
});

main.innerHTML = sum