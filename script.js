const weightInput = document.querySelector("#weight");
const repInput = document.querySelector("#reps");
const rpeInput = document.querySelector("#rpe");
const repSelector = document.querySelector("#rep-selector");
const submitButton = document.querySelector("#submit");
const outputNode = document.querySelector("#main-output");

submitButton.addEventListener("click", calculateBrilliant);

const brilliantPercents = {
  1: 0.93,
  2: 0.88,
  3: 0.83,
  4: 0.78,
  5: 0.73,
  6: 0.68,
  7: 0.63,
  8: 0.58,
};

function estimatedMax(weight, reps, rpe) {
  // uses Brzycki formula
  return weight / (1.0278 - 0.0278 * (reps + (10 - rpe)));
}

function calculateBrilliant(_) {
  weight = +weightInput.value;
  reps = +repInput.value;
  rpe = +rpeInput.value;
  e1rm = estimatedMax(weight, reps, rpe);
  let selectedReps = repSelector.value;
  let outputWeight = Math.round(e1rm * brilliantPercents[selectedReps]);
  outputNode.textContent = `${outputWeight} recommended for sets of ${selectedReps}`;
}
