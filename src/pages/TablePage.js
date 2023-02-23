import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
import Table from "../components/Table";
function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-400", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <h1 className="p-5">UnSortable Table</h1>
      <Table data={data} config={config} keyFn={keyFn} />
      <h1 className="p-5">Sortable Table</h1>
      <SortableTable data={data} config={config} keyFn={keyFn}></SortableTable>
    </div>
  );
}

export default TablePage;
