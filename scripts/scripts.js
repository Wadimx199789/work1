window.onload = function () {
    const arrLinks = document.querySelectorAll('.menu__list-link');
    const ScrollToBottomBtn = document.querySelector('.pulse-btn');
    const burgerButton = document.querySelector('.burger');
    const menuLinks = document.querySelectorAll(".menu__list-link")
    const menu = document.querySelector('.menu');


    burgerButton.addEventListener("click",function(){
        burgerButton.classList.toggle("active");
        if(burgerButton.classList.contains("active")){
            menu.classList.add("active");

        }
        else{
            menu.classList.remove("active");
        }
        
    });
    menuLinks.forEach((menuLink)=>{
        menuLink.addEventListener("click",function(e){
            menu.classList.remove("active");
            burgerButton.classList.remove("active");
        })
    })
    ScrollToBottomBtn.addEventListener('click', function () {

        scrollMenu(this.getAttribute('href'));
    })

    for (let i = 0; i < arrLinks.length; i++) {

        arrLinks[i].addEventListener('click', function () {

            scrollMenu(this.getAttribute('href'));
        })

    }
};

const categoryInner = document.querySelector(".category__inner")
const words = document.querySelectorAll(".advertisement__word");
const blocks = document.querySelectorAll(".category__inner");
const flasks = document.querySelectorAll(".flasks__flask");
const flasksContent = document.querySelectorAll(".flasks__flask-content");

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
        else if(flask.classList.contains("active")){
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


// scroll function
function scrollMenu(blockId) {
    let temp, start, from, to;
    //scroll animation
    cancelAnimationFrame(temp);
    start = performance.now();
    from = window.pageYOffset || document.documentElement.scrollTop;
    to = document.querySelector(blockId).getBoundingClientRect().top;
    // if (blockId === "#lab") {
    //     duration = 1000 * Math.abs(to) / 1000;
    // } else
        duration = 1000 * Math.abs(to) / 4000;

    // scroll
    requestAnimationFrame(function step(timestamp, e) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        (1 > progress) ? temp = requestAnimationFrame(step) : (document.location.hash = blockId);
        document.addEventListener("wheel", function () {
            cancelAnimationFrame(temp);
        })
    })
}