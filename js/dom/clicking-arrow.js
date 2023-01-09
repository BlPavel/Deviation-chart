document.addEventListener("keydown", (e) => {
  const quantityTankCourse =
    document.querySelectorAll("[data-input-form]")[0].value;
  const generatrix = document.querySelectorAll("[data-input-form]")[1].value;
  const input = document.getElementsByClassName("table-input");
  if (e.target.classList.value === "table-input") {
    const parent1 = e.target.parentNode.parentNode.parentNode;
    const parent2 = e.target.parentNode.parentNode;
    const numberChildAxisY = [...parent1.children].indexOf(
      e.target.parentNode.parentNode
    );
    const numberChildAxisX = [...parent2.children].indexOf(e.target.parentNode);
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (numberChildAxisY === 3) {
        return;
      } else {
        input[
          (numberChildAxisY - 4) * generatrix + (numberChildAxisX - 1)
        ].focus();
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (numberChildAxisY === 2 + +quantityTankCourse) {
        return;
      } else {
        input[
          (numberChildAxisY - 2) * generatrix + (numberChildAxisX - 1)
        ].focus();
      }
    } else return;
  } else return;
});
