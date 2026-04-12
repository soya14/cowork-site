const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      element.style.animationDelay = `${index * 80}ms`;
      element.classList.add("is-visible");
      revealObserver.unobserve(element);
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

document.querySelectorAll(".check-item input").forEach((input) => {
  const wrapper = input.closest(".check-item");

  const syncState = () => {
    wrapper.classList.toggle("is-complete", input.checked);
  };

  input.addEventListener("change", syncState);
  syncState();
});
