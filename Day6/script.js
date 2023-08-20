const inputs = document.querySelectorAll("input");

function handleChange() {
  const dataType = this.dataset.type || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + dataType
  );
  console.log(this);
}

inputs.forEach(input => input.addEventListener("change", handleChange));
inputs.forEach(input => input.addEventListener("mousemove", handleChange));
