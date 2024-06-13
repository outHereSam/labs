const products = [
  {
    imageUrl: "./images/1.png",
    caption: "This is the iPhone 15. Apple latest iPhone technology",
  },
  {
    imageUrl: "./images/2.png",
    caption: "The PS5 is a great console for next generation gaming",
  },
  {
    imageUrl: "./images/3.png",
    caption:
      "Apple AirPods. Great audio quality and convenient for everyday use",
  },
  {
    imageUrl: "./images/4.png",
    caption: "The X-Box series S is a great low budget console",
  },
  {
    imageUrl: "./images/5.png",
    caption: "Apple MacBook Pro M3",
  },
  {
    imageUrl: "./images/6.png",
    caption: "Apple Watch Series 9. ",
  },
];

const galleryContainer = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close");

// Load thumbnail elements
products.forEach((product) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("src", product.imageUrl);
  thumbnail.setAttribute("alt", product.caption);

  imageContainer.appendChild(thumbnail);

  galleryContainer.appendChild(imageContainer);

  imageContainer.addEventListener("click", function () {
    // Show lightbox
    lightBox.style.display = "flex";
  });
});

// close lightbox
closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

lightBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("lightbox")) {
    lightBox.style.display = "none";
  }
});
