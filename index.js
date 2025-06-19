let contactContainer = document.querySelector(".contact-container");
let contactButton = document.querySelector("#contact-link");

contactButton.addEventListener("click", () => {
  contactContainer.classList.toggle("contact-closed");
});

contactContainer.addEventListener("click", (e) => {
  // close when clicked anywhere except links
  if (e.target.tagName !== "A") {
    contactContainer.classList.toggle("contact-closed");
  }
});
