document.getElementById("browser")?.addEventListener("click", () => {
  const gallerySection = document.querySelector(".gallery-section");
  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("firstLandingPage").addEventListener("click", () => {
  open("https://designify-landing-page.vercel.app/", "_blank");
});
