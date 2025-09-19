// Part 2: Functions, Parameters, Return, Scope

// Global variable (scope demo)
let globalMessage = "This is a global message.";

// Function with local scope, parameters, and return value
function calculateSum(a, b) {
  let result = a + b; // local variable
  document.getElementById("sumResult").textContent = "Result: " + result;
  return result;
}

// Function to demonstrate scope
function showScopeMessage() {
  let localMessage = "This is a local message.";
  document.getElementById("scopeDemo").textContent =
    globalMessage + " | " + localMessage;
}
showScopeMessage();

// Part 3: Combine CSS & JS
document.getElementById("triggerBtn").addEventListener("click", function () {
  let box = document.getElementById("animateBox");

  // Toggle animation class
  box.classList.remove("animate"); // reset if already applied
  void box.offsetWidth; // trick to restart animation
  box.classList.add("animate");
});
