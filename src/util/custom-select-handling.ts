export default function handleCustomSelectInteraction() {
  const selectContainers = document.querySelectorAll<HTMLElement>(
    ".custom-select-container",
  );

  selectContainers.forEach((container) => {
    const selectTrigger = container.querySelector(".custom-select-trigger");
    const selectOptions = container.querySelector(".custom-select-options");
    const selectValue = container.querySelector(".custom-select-value");
    const hiddenInput = container.querySelector(
      ".custom-select-hidden",
    ) as HTMLInputElement;
    const chevron = container.querySelector(".custom-select-chevron");

    if (!selectTrigger || !selectOptions || !chevron) return;

    // Toggle dropdown on button click
    selectTrigger.addEventListener("click", () => {
      const isExpanded = selectTrigger.getAttribute("aria-expanded") === "true";

      selectTrigger.setAttribute("aria-expanded", (!isExpanded).toString());
      selectOptions.classList.toggle("hidden");
      chevron.classList.toggle("rotate-180");
    });

    // Handle option selection
    selectOptions.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const option = target.closest('li[role="option"]');

      if (!option) return;

      // Update UI and hidden input
      const value = option.getAttribute("data-value");
      if (value && selectValue) selectValue.textContent = value;
      if (hiddenInput && value) hiddenInput.value = value;

      // Close dropdown
      selectTrigger.setAttribute("aria-expanded", "false");
      selectOptions.classList.add("hidden");
      chevron.classList.remove("rotate-180");
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    selectContainers.forEach((container) => {
      const selectTrigger = container.querySelector(".custom-select-trigger");
      const selectOptions = container.querySelector(".custom-select-options");
      const chevron = container.querySelector(".custom-select-chevron");

      if (
        selectTrigger &&
        selectOptions &&
        chevron &&
        !container.contains(e.target as Node)
      ) {
        selectTrigger.setAttribute("aria-expanded", "false");
        selectOptions.classList.add("hidden");
        chevron.classList.remove("rotate-180");
      }
    });
  });
}
