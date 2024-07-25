import React, { useEffect, useState } from 'react';
import './App.css';

const initialData = [
  { Id: 10, Order: 1, Breed: "Akita", Size: "Large" },
  { Id: 11, Order: 2, Breed: "Beagle", Size: "Small" },
  { Id: 12, Order: 3, Breed: "Chihuahua", Size: "Small" },
  { Id: 13, Order: 4, Breed: "Dalmatian", Size: "Medium" },
  { Id: 14, Order: 5, Breed: "Eurasier", Size: "Medium" },
  { Id: 15, Order: 6, Breed: "Foxhound", Size: "Large" },
  { Id: 16, Order: 7, Breed: "German Shepherd", Size: "Large" },
  { Id: 17, Order: 8, Breed: "Hovawart", Size: "Large" },
  { Id: 18, Order: 9, Breed: "Irish Setter", Size: "Large" },
  { Id: 19, Order: 10, Breed: "Shiba Inu", Size: "Small" }
];

function DragAndDropTable({ data, setData }) {
  useEffect(() => {
    const table = document.querySelector("#demo tbody");

    function initializeDragAndDrop() {
      const rows = table.querySelectorAll("tr");

      for (let tr of rows) {
        tr.draggable = true;

        tr.ondragstart = (e) => {
          e.dataTransfer.effectAllowed = "move";
          e.dataTransfer.setData("text/plain", tr.dataset.order);
        };

        tr.ondragover = (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        };

        tr.ondrop = (e) => {
          e.preventDefault();
          const draggedOrder = e.dataTransfer.getData("text/plain");
          const draggedElem = table.querySelector(`tr[data-order='${draggedOrder}']`);
          const targetOrder = tr.dataset.order;

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
          for (let r of rows) {
            r.classList.remove("hover");
          }
        };
      }

      function updateRowOrders() {
        const updatedData = Array.from(table.querySelectorAll("tr")).map((row, index) => {
          row.dataset.order = index + 1;
          return {
            Id: row.dataset.id,
            Order: index + 1,
            Breed: row.querySelectorAll("td")[0].textContent,
            Size: row.querySelectorAll("td")[1].textContent,
          };
        });
        setData(updatedData);
      }
    }

    initializeDragAndDrop();
  }, [data, setData]);

  return null;
}

function Table({ data }) {
  return (
    <table id="demo">
      <thead>
        <tr>
          <th>Breed</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.Id} data-order={item.Order} data-id={item.Id}>
            <td>{item.Breed}</td>
            <td>{item.Size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [data, setData] = useState(initialData);

  return (
    <div className="App">
      <Table data={data} />
      <DragAndDropTable data={data} setData={setData} />
    </div>
  );
}

export default App;
