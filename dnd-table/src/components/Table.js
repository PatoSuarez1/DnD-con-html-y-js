import React from 'react';

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

const Table = () => (
  <table id="demo">
    <thead>
      <tr>
        <th>Breed</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.Order} data-order={item.Order}>
          <td>{item.Breed}</td>
          <td>{item.Size}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
