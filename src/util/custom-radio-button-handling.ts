export default function handleCustomRadioButtonInteraction() {
  const customRadioGroups = document.querySelectorAll(".custom-radio-group");

  customRadioGroups.forEach((customRadioGroup) => {
    customRadioGroup.addEventListener("click", () => {
      const radioButtons = customRadioGroup.querySelectorAll<HTMLInputElement>(
        ".custom-radio-hidden",
      );

      radioButtons.forEach((radioButton) => {
        const customRadioButtonContainer = radioButton.closest("div");
        const customRadioButtonLabel =
          customRadioButtonContainer?.querySelector(".custom-radio-label");
        const customRadioButton = customRadioButtonLabel?.querySelector(
          ".custom-radio-button",
        );

        if (radioButton.checked) {
          customRadioButton?.querySelector("div")?.classList.remove("hidden");
        } else {
          customRadioButton?.querySelector("div")?.classList.add("hidden");
        }
      });
    });
  });
}
