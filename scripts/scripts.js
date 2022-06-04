const categoryInner = document.querySelector(".category__inner")
const words = document.querySelectorAll(".advertisement__word");
const blocks = document.querySelectorAll(".category__inner");
const flasks = document.querySelectorAll(".flasks__flask");
const flasksContent = document.querySelectorAll(".flasks__flask-content")

flasks.forEach((flask) => {
    flask.addEventListener("click", (e) => {
        if (!flask.classList.contains("active")) {
            flask.classList.add("active");
            flasks.forEach((flask) => {
                if (!flask.classList.contains("active")) {
                    flask.classList.add("hide");
                }
            })
        }
        else {
            flask.classList.remove("active");
            flasks.forEach((flask) => {
                if (flask.classList.contains("hide")) {
                    flask.classList.remove("hide");
                }
            })
        }
        flasksContent.forEach((flasksContent) => {
            if (flasksContent.getAttribute("data-flask") === e.target.parentNode.getAttribute("data-flask")) {
                switch (e.target.parentNode.getAttribute("data-flask")) {
                    case "light": if (!flasksContent.classList.contains("active")) {
                        flasksContent.classList.add("active");
                    }
                    else {
                        flasksContent.classList.remove("active");
                    };
                        break;
                    case "business": if (!flasksContent.classList.contains("active")) {
                        flasksContent.classList.add("active");
                    }
                    else {
                        flasksContent.classList.remove("active");
                    };
                        break;
                    case "creative": if (!flasksContent.classList.contains("active")) {
                        flasksContent.classList.add("active");
                    }
                    else {
                        flasksContent.classList.remove("active");
                    };
                        break;

                }


            }
        })
    });
})
words.forEach((word) => {
    word.addEventListener("click", (e) => {
        if (!categoryInner.classList.contains("hide")) {
            categoryInner.classList.add("hide")
        }
        blocks.forEach((block) => {
            if (block.getAttribute("data-name") === e.target.getAttribute("data-name")) {
                blocks.forEach((block) => {
                    if (block.classList.contains("active")) {
                        block.classList.remove("active")
                    }
                })
                block.classList.add("active")
            }
        })

    })
});