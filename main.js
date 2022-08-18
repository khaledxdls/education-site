const slides = document.querySelectorAll(".testem_item");

const btn_right = document.querySelector(".btn-slide-right");
const btn_left = document.querySelector(".btn-slide-left");
const btn_dots = document.querySelectorAll(".btn-dots");

let curslide = 0;
const max_slide = slides.length - 1;

btn_right.addEventListener("click", function() {
    if (max_slide === curslide) {
        curslide = 0;
    } else {
        curslide++;
    }
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${160 * (i - curslide)}%)`;
        if (160 * (i - curslide) === 0) {
            btn_dots[i].classList.add("active");
            btn_dots[i].style.width = "1.8rem";
            btn_dots[i].style.borderRadius = "3px";
        } else {
            btn_dots[i].classList.remove("active");
            btn_dots[i].style.width = "1rem";
            btn_dots[i].style.borderRadius = "50%";
        }
    });
});
btn_left.addEventListener("click", function() {
    if (curslide === 0) {
        curslide = max_slide;
    } else {
        curslide--;
    }
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${160 * (i - curslide)}%)`;
        if (160 * (i - curslide) === 0) {
            btn_dots[i].classList.add("active");
            btn_dots[i].style.width = "1.8rem";
            btn_dots[i].style.borderRadius = "3px";
        } else {
            btn_dots[i].classList.remove("active");
            btn_dots[i].style.width = "1rem";
            btn_dots[i].style.borderRadius = "50%";
        }
    });
});

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        if (max_slide === curslide) {
            curslide = 0;
        } else {
            curslide++;
        }
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${160 * (i - curslide)}%)`;
            if (160 * (i - curslide) === 0) {
                btn_dots[i].classList.add("active");
                btn_dots[i].style.width = "1.8rem";
                btn_dots[i].style.borderRadius = "3px";
            } else {
                btn_dots[i].classList.remove("active");
                btn_dots[i].style.width = "1rem";
                btn_dots[i].style.borderRadius = "50%";
            }
        });
    }
    if (e.key == "ArrowLeft") {
        if (curslide === 0) {
            curslide = max_slide;
        } else {
            curslide--;
        }
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${160 * (i - curslide)}%)`;
            if (160 * (i - curslide) === 0) {
                btn_dots[i].classList.add("active");
                btn_dots[i].style.width = "1.8rem";
                btn_dots[i].style.borderRadius = "3px";
            } else {
                btn_dots[i].classList.remove("active");
                btn_dots[i].style.width = "1rem";
                btn_dots[i].style.borderRadius = "50%";
            }
        });
    }
});