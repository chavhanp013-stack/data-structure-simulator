let queue = [];
let capacity = 5;


/* =========================
   UPDATE QUEUE
========================= */

function updateQueue() {

    const queueDiv =
        document.getElementById("queue");

    queueDiv.innerHTML = "";


    // Queue is displayed
    // FRONT → REAR

    for (let i = 0; i < queue.length; i++) {

        const item =
            document.createElement("div");

        item.className = "queue-item";

        item.innerText = queue[i];

        queueDiv.appendChild(item);
    }


    // SIZE

    document.getElementById("sizeDisplay").innerText =
        capacity;


    // ELEMENTS

    document.getElementById("elements").innerText =
        queue.length + " / " + capacity;


    // IS EMPTY

    document.getElementById("isEmpty").innerText =
        queue.length === 0 ? "Yes" : "No";


    // IS FULL

    document.getElementById("isFull").innerText =
        queue.length === capacity ? "Yes" : "No";


    // FRONT ELEMENT

    document.getElementById("frontElement").innerText =
        queue.length > 0
            ? queue[0]
            : "-";


    // REAR ELEMENT

    document.getElementById("rearElement").innerText =
        queue.length > 0
            ? queue[queue.length - 1]
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
   ENQUEUE
========================= */

function enqueueElement() {

    const input =
        document.getElementById("valueInput");

    const value =
        input.value.trim();


    if (value === "") {

        showMessage(
            "Please enter a value"
        );

        return;
    }


    // QUEUE OVERFLOW

    if (queue.length >= capacity) {

        showMessage(
            "Queue Overflow"
        );


        document.getElementById("operation").innerText =
            "Enqueue";

        document.getElementById("state").innerText =
            "Queue Full";


        addHistory(
            "Queue Overflow — cannot enqueue " + value
        );

        return;
    }


    // ADD TO REAR

    queue.push(value);


    showMessage(
        value + " enqueued into queue"
    );


    document.getElementById("operation").innerText =
        "Enqueue";

    document.getElementById("state").innerText =
        "Element Added";


    addHistory(
        value + " is enqueued into queue"
    );


    input.value = "";


    updateQueue();
}


/* =========================
   DEQUEUE
========================= */

function dequeueElement() {

    if (queue.length === 0) {

        showMessage(
            "Queue Underflow"
        );


        document.getElementById("operation").innerText =
            "Dequeue";

        document.getElementById("state").innerText =
            "Queue Empty";


        addHistory(
            "Queue Underflow — queue is empty"
        );

        return;
    }


    // REMOVE FROM FRONT

    const value =
        queue.shift();


    showMessage(
        value + " dequeued from queue"
    );


    document.getElementById("operation").innerText =
        "Dequeue";

    document.getElementById("state").innerText =
        "Element Removed";


    addHistory(
        value + " is dequeued from queue"
    );


    updateQueue();
}


/* =========================
   PEEK
========================= */

function peekElement() {

    if (queue.length === 0) {

        showMessage(
            "Queue is empty"
        );


        document.getElementById("operation").innerText =
            "Peek";

        document.getElementById("state").innerText =
            "Queue Empty";


        addHistory(
            "PEEK — queue is empty"
        );

        return;
    }


    const value =
        queue[0];


    showMessage(
        "Front element is " + value
    );


    document.getElementById("operation").innerText =
        "Peek";

    document.getElementById("state").innerText =
        "Front Viewed";


    addHistory(
        "PEEK — " + value + " is at the front"
    );
}


/* =========================
   DISPLAY
========================= */

function displayQueue() {

    if (queue.length === 0) {

        showMessage(
            "Queue is empty"
        );


        document.getElementById("operation").innerText =
            "Display";

        document.getElementById("state").innerText =
            "Queue Empty";


        addHistory(
            "DISPLAY — queue is empty"
        );

        return;
    }


    showMessage(
        "Queue: " + queue.join(" → ")
    );


    document.getElementById("operation").innerText =
        "Display";

    document.getElementById("state").innerText =
        "Displayed";


    addHistory(
        "DISPLAY — " + queue.join(" → ")
    );
}


/* =========================
   IS EMPTY
========================= */

function isEmptyQueue() {

    const empty =
        queue.length === 0;


    showMessage(
        empty
            ? "Queue is empty"
            : "Queue is not empty"
    );


    document.getElementById("operation").innerText =
        "isEmpty";

    document.getElementById("state").innerText =
        empty ? "Empty" : "Not Empty";


    addHistory(
        "isEmpty — " +
        (
            empty
                ? "Queue is empty"
                : "Queue is not empty"
        )
    );
}


/* =========================
   IS FULL
========================= */

function isFullQueue() {

    const full =
        queue.length === capacity;


    showMessage(
        full
            ? "Queue is full"
            : "Queue is not full"
    );


    document.getElementById("operation").innerText =
        "isFull";

    document.getElementById("state").innerText =
        full ? "Full" : "Not Full";


    addHistory(
        "isFull — " +
        (
            full
                ? "Queue is full"
                : "Queue is not full"
        )
    );
}


/* =========================
   RESET
========================= */

function resetQueue() {

    queue = [];


    showMessage(
        "Queue has been reset"
    );


    document.getElementById("operation").innerText =
        "Reset";

    document.getElementById("state").innerText =
        "Reset";


    addHistory(
        "Queue has been reset"
    );


    updateQueue();
}


/* =========================
   SET SIZE
========================= */

function setSize() {

    const newSize =
        parseInt(
            document.getElementById("queueSize").value
        );


    if (isNaN(newSize) || newSize <= 0) {

        showMessage(
            "Enter a valid queue size"
        );

        return;
    }


    if (newSize < queue.length) {

        showMessage(
            "New size cannot be smaller than current elements"
        );

        return;
    }


    capacity = newSize;


    showMessage(
        "Queue size changed to " + capacity
    );


    document.getElementById("operation").innerText =
        "Set Size";

    document.getElementById("state").innerText =
        "Size Updated";


    addHistory(
        "Queue size changed to " + capacity
    );


    updateQueue();
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

                enqueueElement();

            }

        }
    );


/* =========================
   INITIAL UPDATE
========================= */

updateQueue();