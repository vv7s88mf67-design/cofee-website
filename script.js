const images = [
  "https://media.istockphoto.com/id/2232885441/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%96%D0%BB%D0%B0-%D1%87%D0%B0%D1%88%D0%BA%D0%B0-%D1%87%D0%BE%D1%80%D0%BD%D0%BE%D1%97-%D0%BA%D0%B0%D0%B2%D0%B8-%D0%BD%D0%B0-%D1%82%D0%BB%D1%96-%D0%BA%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%85-%D0%B7%D0%B5%D1%80%D0%B5%D0%BD-%D0%B2%D0%B8%D0%B4-%D0%B7%D0%B2%D0%B5%D1%80%D1%85%D1%83.jpg?s=2048x2048&w=is&k=20&c=6394KNWAeT6iF7v-ZwZlwK4t80799Sn0XCSL_NxMazg=",
  "https://media.istockphoto.com/id/2025692222/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BA%D0%BB%D1%8F%D0%BD%D0%B0-%D1%87%D0%B0%D1%88%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B0%D0%B2%D0%B8-%D0%B5%D1%81%D0%BF%D1%80%D0%B5%D1%81%D0%BE-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96.jpg?s=2048x2048&w=is&k=20&c=_2QeAFuUPH8GFConGOell3B-ZlYdw2wfzK_grqHB5Fo=",
  "https://media.istockphoto.com/id/2217630456/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE-%D0%B2-%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D1%8F%D0%BD%D0%BD%D0%BE%D0%B9-%D1%87%D0%B0%D1%88%D0%BA%D0%B5-%D0%BD%D0%B0-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%BC-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%B5.jpg?s=612x612&w=0&k=20&c=fMoT38fjK1kyQCBYbRRaDa24ioiUlJfi0BxdZUEyx0M=",
  "https://media.istockphoto.com/id/1297103457/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%BB%D0%B8%D0%B2%D0%BA%D0%B0-%D1%81%D0%BB%D0%B8%D0%B2%D0%BA%D0%B8-%D0%B2-%D1%87%D0%B0%D1%88%D0%BA%D1%83-%D0%BA%D0%BE%D1%84%D0%B5.jpg?s=612x612&w=0&k=20&c=kdv2LgxezQzRcJmPQYhGY8gLxvxuFY2LAOIeMGdGziM=",
]

const slide = document.querySelector("#slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let current = 0;
let timer = setInterval(nextSlide, 4500);

function nextSlide() {
  current = (current + 1) % images.length;
  slide.classList.add("opacity-0");
  setTimeout(() => {
    slide.classList.remove("opacity-0");
    updateSlider();
  }, 300);
}

next.addEventListener("click", () => {
  clearInterval(timer);
  nextSlide();
  timer = setInterval(nextSlide, 4500);
});

prev.addEventListener("click", () => {
  clearInterval(timer);
  slide.classList.add("opacity-0");
  setTimeout(() => {
    current = (current - 1 + images.length) % images.length;
    slide.classList.remove("opacity-0");
    updateSlider();
  }, 300);
  timer = setInterval(nextSlide, 4500);
});


const dotsContainer = document.querySelector("#dots");

images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("w-24", "h-[2px]", "bg-gray-400", "cursor-pointer", "transition", "duration-300");
  
  if (index === 0) dot.classList.add("bg-black"); 
  
  dot.addEventListener("click", () => {
    current = index;
    updateSlider();
  });
  
  dotsContainer.appendChild(dot);
});



function updateSlider() {
  slide.src = images[current];
  
  document.querySelectorAll("#dots div").forEach((dot, index) => {
    dot.classList.remove("bg-black");
    dot.classList.add("bg-gray-400");
    if (index === current) {
      dot.classList.add("bg-black");
      dot.classList.remove("bg-gray-400");
    }
  });
}


const button = document.getElementById("theme-btn");
    const root = document.documentElement;

    // Восстанавливаем ранее выбранную тему
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    }

    button.addEventListener("click", () => {
      root.classList.toggle("dark");

      localStorage.theme = root.classList.contains("dark")
        ? "dark"
        : "light";
    });

