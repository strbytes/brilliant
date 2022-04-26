const weightInput = document.querySelector("#weight");
const repInput = document.querySelector("#reps");
const rpeInput = document.querySelector("#rpe");
const repSelector = document.querySelector("#rep-selector");
const submitButton = document.querySelector("#submit");
const e1rmOutput = document.querySelector("#e1rm");
const resultsOutput = document.querySelector("#results");

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

function brilliantMax(weight, reps, rpe) {
  // uses modified Brzycki formula
  return weight / (1.0278 - 0.0278 * (reps + (9 - rpe)));
}

function calculateBrilliant(_) {
  let weight = +weightInput.value;
  let reps = +repInput.value;
  let rpe = +rpeInput.value;
  let e1rm = estimatedMax(weight, reps, rpe);
  let brilliant1RM = brilliantMax(weight, reps, rpe);
  let selectedReps = repSelector.value;
  let outputWeight = brilliant1RM * brilliantPercents[selectedReps];
  displayResults(round2point5(e1rm), round2point5(outputWeight));
}

function displayResults(e1rm, outputWeight) {
  e1rmOutput.textContent = `Estimated 1RM: ${e1rm}`;
  resultsOutput.textContent = `Suggested weight: ${outputWeight}`;
}

function round2point5(n) {
  tens = Math.floor(n / 10) * 10;
  remainder = (n - tens) / 10;
  round_remainder = Math.round(remainder * 4) / 4;
  return tens + round_remainder * 10;
}
