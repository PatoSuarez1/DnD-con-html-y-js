const data = [
    { Order: 1, Breed: "Akita", Size: "Large" },
    { Order: 2, Breed: "Beagle", Size: "Small" },
    { Order: 3, Breed: "Chihuahua", Size: "Small" },
    { Order: 4, Breed: "Dalmatian", Size: "Medium" },
    { Order: 5, Breed: "Eurasier", Size: "Medium" },
    { Order: 6, Breed: "Foxhound", Size: "Large" },
    { Order: 7, Breed: "German Shepherd", Size: "Large" },
    { Order: 8, Breed: "Hovawart", Size: "Large" },
    { Order: 9, Breed: "Irish Setter", Size: "Large" },
    { Order: 10, Breed: "Shiba Inu", Size: "Small" }
  ];
  
  window.addEventListener("load", () => {
    // (PART A) GET TABLE BODY ELEMENT
    const tbody = document.querySelector("#demo tbody");
  
    // (PART B) ADD ROWS BASED ON DATA
    data.forEach(item => {
      const row = document.createElement("tr");
      row.setAttribute("data-order", item.Order);
  
      const breedCell = document.createElement("td");
      breedCell.textContent = item.Breed;
      row.appendChild(breedCell);
  
      const sizeCell = document.createElement("td");
      sizeCell.textContent = item.Size;
      row.appendChild(sizeCell);
  
      tbody.appendChild(row);
    });
  
    // (PART C) DRAG-AND-DROP MECHANISM
    const all = document.querySelectorAll("#demo tbody tr");
  
    for (let tr of all) {
      tr.draggable = true;
  
      tr.ondragstart = e => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", tr.getAttribute("data-order"));
      };
  
      tr.ondragover = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      };
  
      tr.ondrop = e => {
        e.preventDefault();
        const draggedOrder = e.dataTransfer.getData("text/plain");
        const draggedElem = document.querySelector(`tr[data-order="${draggedOrder}"]`);
        const targetOrder = tr.getAttribute("data-order");
  
        if (parseInt(draggedOrder) < parseInt(targetOrder)) {
          tr.insertAdjacentElement('afterend', draggedElem);
        } else {
          tr.insertAdjacentElement('beforebegin', draggedElem);
        }
  
        updateRowOrders();
      };
  
      tr.ondragenter = () => tr.classList.add("hover");
      tr.ondragleave = () => tr.classList.remove("hover");
      tr.ondragend = () => {
        for (let r of all) {
          r.classList.remove("hover");
        }
      };
    }
  
    function updateRowOrders() {
      const rows = document.querySelectorAll("#demo tbody tr");
      rows.forEach((row, index) => {
        row.setAttribute("data-order", index + 1);
      });
    }
  });
  



// window.addEventListener("load", () => {
//     // (PART A) GET TABLE ROWS, EXCLUDE HEADER ROW
//     var all = document.querySelectorAll("#demo tr:not(:first-of-type)");
 
//     // (PART B) DRAG-AND-DROP MECHANISM
//     for (let tr of all) {
//       // (B1) ROW IS DRAGGABLE
//       tr.draggable = true;
 
//       // (B2) ON DRAG START - SET DATA TRANSFER
//       tr.ondragstart = e => {
//         e.dataTransfer.effectAllowed = "move";
//         e.dataTransfer.setData("text/plain", tr.id);
//       };
 
//       // (B3) PREVENT DRAG OVER - NECESSARY FOR DROP TO WORK
//       tr.ondragover = e => {
//         e.preventDefault();
//         e.dataTransfer.dropEffect = "move";
//       };
 
//       // (B4) ON DROP - MOVE ROWS
//       tr.ondrop = e => {
//         e.preventDefault();
//         const draggedId = e.dataTransfer.getData("text/plain");
//         const draggedElem = document.getElementById(draggedId);
//         const targetId = tr.id;
 
//         if (parseInt(draggedId) < parseInt(targetId)) {
//           tr.insertAdjacentElement('afterend', draggedElem);
//         } else {
//           tr.insertAdjacentElement('beforebegin', draggedElem);
//         }
 
//         // Update row IDs
//         updateRowIds();
//       };
 
//       // (B5) COSMETICS - HIGHLIGHT ROW "ON DRAG HOVER"
//       tr.ondragenter = () => tr.classList.add("hover");
//       tr.ondragleave = () => tr.classList.remove("hover");
//       tr.ondragend = () => {
//         for (let r of all) { r.classList.remove("hover"); }
//       };
//     }
 
//     // Function to update row IDs
//     function updateRowIds() {
//       const rows = document.querySelectorAll("#demo tr:not(:first-of-type)");
//       rows.forEach((row, index) => {
//         row.id = index + 2; // Start IDs from 2
//       });
//     }
// });
