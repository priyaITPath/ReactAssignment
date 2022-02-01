import React, { useState } from "react";
import MaterialTable from "material-table";

const empList = [
  { name: "mark", age: 30, salary: 20000 },
  { name: "jason", age: 32, salary: 40000 },
  { name: "philip", age: 35, salary: 50000 },
  { name: "quolam", age: 27, salary: 60000 },
  { name: "quolam1", age: 27, salary: 60000 },
  { name: "quolam 2", age: 27, salary: 70000 },
  { name: "quolam 3", age: 27, salary: 80000 },
  { name: "quolam 4", age: 27, salary: 90000 },
  { name: "quolam 5", age: 37, salary: 90500 },
  { name: "quolam 6", age: 24, salary: 80500 },
  { name: "quolam 7", age: 32, salary: 70500 },
  { name: "quolam 8", age: 36, salary: 65000 },
  { name: "quolam 9", age: 37, salary: 74000 },
  { name: "quolam 10", age: 36, salary: 10000 }
]

function App() {
  const [data, setData] = useState(empList)
  const columns = [
    { title: "name", field: "name" },
    { title: "age", field: "age" },
    { title: "salary", field: "salary" },
    { title: "address", field: "address" }
  ]

  return (
    <div className="App">
      <MaterialTable title="Employee Details"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, newRow]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)

          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve, reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
            
          })
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  )
}

export default App;