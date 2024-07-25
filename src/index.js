import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

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
