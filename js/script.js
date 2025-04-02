// Example JavaScript to show/hide sections
// You can expand or modify this for more interactive features

document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("main section h2");

  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      const content = heading.nextElementSibling;
      if (content) {
        content.style.display = content.style.display === "none" ? "block" : "none";
      }
    });
  });
});
