const display = document.getElementById("display");
const roast = document.getElementById("roast");

function press(value) {
    display.value += value;
    roast.textContent = "";
}

function clearDisplay() {
    display.value = "";
    roast.textContent = "Wow, you cleared it? After all that effort?";
}

const roasts = [
    "You really needed help with THAT? 💀",
    "Bro… even a potato could calculate this.",
    "Do you seriously not know basic math?",
    "I expected better from you ngl.",
    "Congrats, you pressed '='. Truly a genius move.",
    "If brains were RAM, you'd be running 2GB.",
    "You're the reason calculators exist.",
    "Math isn't mathing for you, huh?",
    "Damn… imagine needing a calculator for this.",
    "Even my circuits are disappointed."
];

function calculate() {
    try {
        if (display.value.trim() === "") {
            roast.textContent = "You gotta type something first, Einstein.";
            return;
        }

        let result = eval(display.value);
        display.value = result;

        roast.textContent = roasts[Math.floor(Math.random() * roasts.length)];

    } catch {
        roast.textContent = "You broke the math. Congrats.";
    }
}

/* ⭐ MOVING EQUAL BUTTON */
const equalsBtn = document.querySelector(".equals");
const calcBox = document.getElementById("calc");

equalsBtn.addEventListener("mouseover", () => {

    // Switch to absolute only when moving
    equalsBtn.style.position = "absolute";

    // Calculator dimensions
    const boxRect = calcBox.getBoundingClientRect();

    const maxX = boxRect.width - 80;
    const maxY = boxRect.height - 80;

    // Random position
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    equalsBtn.style.left = newX + "px";
    equalsBtn.style.top = newY + "px";
});
