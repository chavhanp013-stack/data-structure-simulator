let stack = [];
let capacity = 5;


/* =========================
   UPDATE STACK
========================= */

function updateStack() {

    const stackDiv = document.getElementById("stack");

    stackDiv.innerHTML = "";


    // Last added element appears at TOP
    // First added element remains at BOTTOM

    for (let i = 0; i < stack.length; i++) {

    const item = document.createElement("div");

    item.className = "stack-item";

    item.innerText = stack[i];

    stackDiv.appendChild(item);
}


    // SIZE

    document.getElementById("sizeDisplay").innerText =
        capacity;


    // ELEMENTS

    document.getElementById("elements").innerText =
        stack.length + " / " + capacity;


    // IS EMPTY

    document.getElementById("isEmpty").innerText =
        stack.length === 0 ? "Yes" : "No";


    // IS FULL

    document.getElementById("isFull").innerText =
        stack.length === capacity ? "Yes" : "No";


    // TOP ELEMENT

    document.getElementById("topElement").innerText =
        stack.length > 0
            ? stack[stack.length - 1]
            : "-";


    // BOTTOM ELEMENT

    document.getElementById("bottomElement").innerText =
        stack.length > 0
            ? stack[0]
            : "-";
}


/* =========================
   MESSAGE
========================= */

function showMessage(message) {

    document.getElementById("message").innerText =
        message;
}


/* =========================
   HISTORY
========================= */

function addHistory(message) {

    const history =
        document.getElementById("history");

    const item =
        document.createElement("p");

    item.innerText = message;

    history.prepend(item);
}


/* =========================
   PUSH
========================= */

function pushElement() {

    const input =
        document.getElementById("valueInput");

    const value =
        input.value.trim();


    if (value === "") {

        showMessage("Please enter a value");

        return;
    }


    // STACK OVERFLOW

    if (stack.length >= capacity) {

        showMessage("Stack Overflow");

        document.getElementById("operation").innerText =
            "Push";

        document.getElementById("state").innerText =
            "Stack Full";

        addHistory(
            "Stack Overflow — cannot push " + value
        );

        return;
    }


    // ADD ELEMENT

    stack.push(value);


    showMessage(
        value + " pushed into stack"
    );


    document.getElementById("operation").innerText =
        "Push";

    document.getElementById("state").innerText =
        "Element Added";


    addHistory(
        value + " is pushed into stack"
    );


    input.value = "";


    updateStack();
}


/* =========================
   POP
========================= */

function popElement() {

    if (stack.length === 0) {

        showMessage("Stack Underflow");

        document.getElementById("operation").innerText =
            "Pop";

        document.getElementById("state").innerText =
            "Stack Empty";

        addHistory(
            "Stack Underflow — stack is empty"
        );

        return;
    }


    // REMOVE TOP ELEMENT

    const value =
        stack.pop();


    showMessage(
        value + " popped from stack"
    );


    document.getElementById("operation").innerText =
        "Pop";

    document.getElementById("state").innerText =
        "Element Removed";


    addHistory(
        value + " is popped from stack"
    );


    updateStack();
}


/* =========================
   PEEK
========================= */

function peekElement() {

    if (stack.length === 0) {

        showMessage("Stack is empty");

        document.getElementById("operation").innerText =
            "Peek";

        document.getElementById("state").innerText =
            "Stack Empty";

        addHistory(
            "PEEK — stack is empty"
        );

        return;
    }


    const value =
        stack[stack.length - 1];


    showMessage(
        "Top element is " + value
    );


    document.getElementById("operation").innerText =
        "Peek";

    document.getElementById("state").innerText =
        "Top Viewed";


    addHistory(
        "PEEK — " + value + " is at the top"
    );
}


/* =========================
   DISPLAY
========================= */

function displayStack() {

    if (stack.length === 0) {

        showMessage("Stack is empty");

        document.getElementById("operation").innerText =
            "Display";

        document.getElementById("state").innerText =
            "Stack Empty";

        addHistory(
            "DISPLAY — stack is empty"
        );

        return;
    }


    showMessage(
        "Stack: " + stack.join(" → ")
    );


    document.getElementById("operation").innerText =
        "Display";

    document.getElementById("state").innerText =
        "Displayed";


    addHistory(
        "DISPLAY — " + stack.join(" → ")
    );
}


/* =========================
   IS EMPTY
========================= */

function isEmptyStack() {

    const empty =
        stack.length === 0;


    showMessage(
        empty
            ? "Stack is empty"
            : "Stack is not empty"
    );


    document.getElementById("operation").innerText =
        "isEmpty";

    document.getElementById("state").innerText =
        empty ? "Empty" : "Not Empty";


    addHistory(
        "isEmpty — " +
        (empty ? "Stack is empty" : "Stack is not empty")
    );
}


/* =========================
   IS FULL
========================= */

function isFullStack() {

    const full =
        stack.length === capacity;


    showMessage(
        full
            ? "Stack is full"
            : "Stack is not full"
    );


    document.getElementById("operation").innerText =
        "isFull";

    document.getElementById("state").innerText =
        full ? "Full" : "Not Full";


    addHistory(
        "isFull — " +
        (full ? "Stack is full" : "Stack is not full")
    );
}


/* =========================
   RESET
========================= */

function resetStack() {

    stack = [];


    showMessage(
        "Stack has been reset"
    );


    document.getElementById("operation").innerText =
        "Reset";

    document.getElementById("state").innerText =
        "Reset";


    addHistory(
        "Stack has been reset"
    );


    updateStack();
}


/* =========================
   SET SIZE
========================= */

function setSize() {

    const newSize =
        parseInt(
            document.getElementById("stackSize").value
        );


    if (isNaN(newSize) || newSize <= 0) {

        showMessage(
            "Enter a valid stack size"
        );

        return;
    }


    if (newSize < stack.length) {

        showMessage(
            "New size cannot be smaller than current elements"
        );

        return;
    }


    capacity = newSize;


    showMessage(
        "Stack size changed to " + capacity
    );


    document.getElementById("operation").innerText =
        "Set Size";

    document.getElementById("state").innerText =
        "Size Updated";


    addHistory(
        "Stack size changed to " + capacity
    );


    updateStack();
}


/* =========================
   ENTER KEY
========================= */

document
    .getElementById("valueInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                pushElement();

            }

        }
    );


/* =========================
   INITIAL UPDATE
========================= */

updateStack();