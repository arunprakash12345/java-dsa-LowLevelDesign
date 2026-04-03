const inputs = document.querySelectorAll(".input");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (isNaN(input.value)) {
            input.value = "";
            return;
        }
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" || event.key === "Delete") {
            input.value = "";
        }
        if ((event.key === "Backspace" || event.key === "Delete") && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    })
})