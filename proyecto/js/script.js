
    const sectionsData = [
        {
            img: "assets/image1.jpg",
            title: "Dietas y Recetas",
            description: "Esta es la descripción de la sección 1."
        },
        {
            img: "assets/image2.jpg",
            title: "Servicios",
            description: "Aquí tenemos la información de la sección 2."
        },
        {
            img: "assets/image3.jpg",
            title: "Consejos",
            description: "Esto es lo que puedes encontrar en la sección 3."
        },
        {
            img: "assets/image3.jpg",
            title: "Adopcion y Protectoras",
            description: "Esto es lo que puedes encontrar en la sección 3."
        },
        {
            img: "assets/image3.jpg",
            title: "Animales perdidos",
            description: "Esto es lo que puedes encontrar en la sección 3."
        },
    ];
    const container = document.getElementById("sections-container");

    sectionsData.forEach(section => {
        const sectionElement = document.createElement("section");
        sectionElement.classList.add("custom-section");

        sectionElement.innerHTML =
            `<img src="${section.img}" alt="${section.title}">
                <h3>${section.title}</h3>
                <p>${section.description}</p>
                `;

                container.appendChild(sectionElement);
    });


    //menu toggle
    const navToggle = document.querySelector(".nav__toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    navToggle.addEventListener("click", () => {
        document.body.classList.toggle(".active");
    }
    );
