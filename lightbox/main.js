const products = [
  {
    id: 1,
    imageUrl: "./images/1.png",
    caption: "This is the iPhone 15. Apple latest iPhone technology",
  },
  {
    id: 2,

    imageUrl: "./images/2.png",
    caption: "The PS5 is a great console for next generation gaming",
  },
  {
    id: 3,
    imageUrl: "./images/3.png",
    caption:
      "Apple AirPods. Great audio quality and convenient for everyday use",
  },
  {
    id: 4,
    imageUrl: "./images/4.png",
    caption: "The X-Box series S is a great low budget console",
  },
  {
    id: 5,
    imageUrl: "./images/5.png",
    caption: "Apple MacBook Pro M3",
  },
  {
    id: 6,
    imageUrl: "./images/6.png",
    caption: "Apple Watch Series 9. ",
  },
];

const prevBtnSVG = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1)"
              >
                <path
                  d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                ></path>
              </svg>`;

const nextBtnSVG = `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1)"
              >
                <path
                  d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                ></path>
              </svg>`;

const galleryContainer = document.querySelector(".gallery");
const lightBox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close");
const centeredContent = document.querySelector(".center-content");
const highlightOptions = document.querySelector(".highlight-options");
const caption = document.querySelector(".caption");

let currentImageState = 1;

const updateLightBoxContent = () => {
  const product = products.find((prod) => prod.id === currentImageState);

  if (!product) return;

  // Clear previous content in highlightOptions
  highlightOptions.innerHTML = "";
  caption.innerText = "";

  const fullImageContainer = document.createElement("div");
  fullImageContainer.classList.add("full-image");

  // Next ad previous buttons
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");

  prevBtn.innerHTML = prevBtnSVG;
  nextBtn.innerHTML = nextBtnSVG;

  prevBtn.classList.add("prev");
  nextBtn.classList.add("next");

  prevBtn.addEventListener("click", handlePreviousBtnClick);

  nextBtn.addEventListener("click", handleNextBtnClick);

  // Hide and show next and prev buttons based on current photo
  if (currentImageState === products[0].id) {
    prevBtn.classList.add("hidden");
  }

  const fullImage = document.createElement("img");
  fullImage.setAttribute("src", product.imageUrl);
  fullImage.setAttribute("alt", product.caption);

  // Create caption
  caption.innerText = product.caption;

  centeredContent.appendChild(caption);

  fullImageContainer.appendChild(fullImage);

  highlightOptions.appendChild(prevBtn);
  highlightOptions.appendChild(fullImageContainer);
  highlightOptions.appendChild(nextBtn);
};

// Handle previous button clicked
const handlePreviousBtnClick = () => {
  if (currentImageState > 1) {
    currentImageState -= 1;
    updateLightBoxContent();
  }
  console.log(currentImageState);
};

// Handle next button clicked
const handleNextBtnClick = () => {
  if (currentImageState < products.length) {
    currentImageState += 1;
    updateLightBoxContent();
  }
  console.log(currentImageState);
};

// Load thumbnail elements
products.forEach((product) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image");

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("src", product.imageUrl);
  thumbnail.setAttribute("alt", product.caption);

  imageContainer.appendChild(thumbnail);

  galleryContainer.appendChild(imageContainer);

  // When image thumbnail is clicked
  imageContainer.addEventListener("click", () => {
    currentImageState = product.id;

    // Show lightbox
    lightBox.style.display = "flex";

    updateLightBoxContent();
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
