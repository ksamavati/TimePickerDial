// --------------------------------------------------------------
// ------- Apply scroll modifier to all 'timepicker__dial's -----
// --------------------------------------------------------------
const dials = document.querySelectorAll('.timepicker__dial');

dials.forEach(element => {
    element.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent default scroll behavior

        const scrollAmount = 100; // Customize this value as needed
        const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction

        element.scrollBy(0, scrollAmount * direction); // Scroll the specific element
    }, { passive: false }); // Disable passive listening to be able to prevent default
});

window.onload = function() {
	dials.forEach(element => {
		element.scrollBy(0, scrollAmount * direction); // Scroll the specific element
		// Disable passive listening to be able to prevent default
	});
};

// document.addEventListener("DOMContentLoaded", function () {
// 	const draggableHours = document.getElementById("timepicker__draggableHours");

// 	let isDragging = false;
// 	let elementBeingDragged;
// 	draggableHours.scroll
// 	let mouseOffset = 0;

// 	// ---- Start Drag ----
// 	function startDrag(e, draggableElement) {
// 		draggableElement.style.cursor = "grabbing";
// 		console.log("MouseY: " + e.clientY);
// 		console.log("TableY: " + draggableElement.offsetTop);
// 		mouseOffset = draggableElement.offsetTop - e.clientY;
// 		isDragging = true;
// 		draggableElement.style.position = "absolute";
// 	}

// 	// ---- Move ----
// 	function moveDrag(e, draggableElement) {
// 		if (isDragging) {
// 			// draggableHours.style.top = e.clientY - draggableHours.offsetHeight / 2 + "px";
// 			draggableHours.style.top = e.clientY + mouseOffset + "px";
// 		}
// 	}

// 	// ---- End Drag ----
// 	function endDrag(e, draggableElement) {
// 		if (isDragging) {
// 			draggableHours.style.cursor = "grab";
// 			isDragging = false;
// 		}
// 	}

// 	// ---- Hours Start Drag Listeners ----
// 	draggableHours.addEventListener("mousedown", function (e) {startDrag(e, draggableHours)});
// 	draggableHours.addEventListener("touchstart", function (e) {startDrag(e, draggableHours)},{ passive: true });
	
// 	// ---- Mouse Drag Listeners ----
// 	document.addEventListener("mousemove", function (e) {moveDrag(e, draggableHours)});
// 	document.addEventListener("mouseup", function (e) {endDrag(e, draggableHours)});

// 	// ---- Touch Drag Listeners ----
// 	document.addEventListener("touchmove",function (e) {moveDrag(e, draggableHours)},{ passive: true });
// 	document.addEventListener("touchend", function (e) {endDrag(e, draggableHours)});
// });
