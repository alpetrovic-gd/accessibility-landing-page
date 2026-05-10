export default function handleCustomCheckboxInteraction() {
  const customCheckboxContainer = document.querySelectorAll(
    ".custom-checkbox-container",
  );

  customCheckboxContainer.forEach((container) => {
    container.addEventListener("click", () => {
      const customCheckboxInputHidden = container.querySelector("input");
      const customCheckboxLabel = container.querySelector("label");
      const customCheckbox = customCheckboxLabel?.querySelector("div");

      if (customCheckboxInputHidden?.checked) {
        customCheckbox?.classList.add("border-primary", "bg-primary");
        customCheckbox?.classList.remove("border-[#8392A6]");
      } else {
        customCheckbox?.classList.remove("border-primary", "bg-primary");
        customCheckbox?.classList.add("border-[#8392A6]");
      }
    });
  });
}
