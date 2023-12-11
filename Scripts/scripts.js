/****************** YOUR NAME: 
 Ammar Tayyab
The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE





/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
document.addEventListener("DOMContentLoaded", function() {
    let switchButton = document.getElementById("model-button");
    let modelTextSpan = document.getElementById("model-text");
    let durationTextSpan = document.getElementById("duration-text");
    let calculatedCostSpan = document.getElementById("calculated-cost");


    // initial text content and duration
    modelTextSpan.textContent = "Model XYZ";
    durationTextSpan.textContent = "0";
    calculatedCostSpan.textContent = "$0.00";

    //  click event listener
    switchButton.addEventListener("click", function() {
        // message to confirm the button click
        console.log("Button clicked!");

        // Checks the current model and switches it
        if (modelTextSpan.textContent === "Model XYZ") {
            modelTextSpan.textContent = "Model CPRG";
        } else {
            modelTextSpan.textContent = "Model XYZ";
        }

        // Update calculated cost when model is switched
        recalculate();
    });

    // Gets a reference to the duration-button
    let durationButton = document.getElementById("duration-button");

    // Adds click event listener to the duration-button
    durationButton.addEventListener("click", function() {
        // Log a message to confirm the duration button click
        console.log("Duration Button clicked!");

        // Add one to the duration each time
        let currentDuration = parseInt(durationTextSpan.textContent);
        durationTextSpan.textContent = (currentDuration + 1).toString();

        // Update calculated cost when duration is changed
        recalculate();
    });

    // Function to update calculated cost based on model and duration
    function recalculate() {
        let model = modelTextSpan.textContent;
        let duration = parseInt(durationTextSpan.textContent);

        // Calculate cost based on the model
        let cost;

        if (model === "Model CPRG") {
            cost = duration * 213;
        } else if (model === "Model XYZ") {
            cost = duration * 100;
        } else {
            // Handle other models if needed
            cost = 0;
        }

        // Update the calculated-cost span with the new cost
        calculatedCostSpan.textContent = cost.toFixed(2);
    }
});





/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE







/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE



