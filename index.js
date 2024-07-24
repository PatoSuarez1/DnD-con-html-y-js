window.addEventListener("load", () => {
    // (PART A) GET TABLE ROWS, EXCLUDE HEADER ROW
    var all = document.querySelectorAll("#demo tr:not(:first-of-type)");
 
    // (PART B) DRAG-AND-DROP MECHANISM
    for (let tr of all) {
      // (B1) ROW IS DRAGGABLE
      tr.draggable = true;
 
      // (B2) ON DRAG START - SET DATA TRANSFER
      tr.ondragstart = e => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", tr.id);
      };
 
      // (B3) PREVENT DRAG OVER - NECESSARY FOR DROP TO WORK
      tr.ondragover = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      };
 
      // (B4) ON DROP - MOVE ROWS
      tr.ondrop = e => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData("text/plain");
        const draggedElem = document.getElementById(draggedId);
        const targetId = tr.id;
 
        if (parseInt(draggedId) < parseInt(targetId)) {
          tr.insertAdjacentElement('afterend', draggedElem);
        } else {
          tr.insertAdjacentElement('beforebegin', draggedElem);
        }
 
        // Update row IDs
        updateRowIds();
      };
 
      // (B5) COSMETICS - HIGHLIGHT ROW "ON DRAG HOVER"
      tr.ondragenter = () => tr.classList.add("hover");
      tr.ondragleave = () => tr.classList.remove("hover");
      tr.ondragend = () => {
        for (let r of all) { r.classList.remove("hover"); }
      };
    }
 
    // Function to update row IDs
    function updateRowIds() {
      const rows = document.querySelectorAll("#demo tr:not(:first-of-type)");
      rows.forEach((row, index) => {
        row.id = index + 2; // Start IDs from 2
      });
    }
});

// target.addEventListener("drop", (ev) => {
//     console.log("Drop");
//     ev.preventDefault();
//     // Get the data, which is the id of the source element
//     const data = ev.dataTransfer.getData("text");
//     const source = document.getElementById(data);
//     ev.target.appendChild(source);
//   });

// source.addEventListener("dragstart", (ev) => {
//     console.log("dragStart");
//     // Change the source element's background color
//     // to show that drag has started
//     ev.currentTarget.classList.add("dragging");
//     // Clear the drag data cache (for all formats/types)
//     ev.dataTransfer.clearData();
//     // Set the drag's format and data.
//     // Use the event target's id for the data
//     ev.dataTransfer.setData("text/plain", ev.target.id);
//   });