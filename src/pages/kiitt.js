import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import './table.css'
//import Entry from './pages/Entry';
function Kiitt() {

  const [dataTable, setDataTable] = useState([]);
  console.log(dataTable);

  const Table = ({ data, column }) => {
    return (
      <table>
        <thead>
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
    )
  }

  const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)


  useEffect(() => {
    axios("http://10.7.212.230:5000/api/getall")
    .then(res => setDataTable(res.data))
    .catch(err => console.log(err))
  },[]);

  const column = [
    { heading: 'Admission Ref.', value:'adm_ref_no' },
    { heading: 'Name', value: 'student_name' },
    { heading: 'City', value: 'city' },
    { heading: 'Phone', value: 'ph_no' },
    { heading: 'Department', value: 'student_det'},
    // { heading: 'Document', value: 'proof_docu.links' },
  ]

  return (
    <div className="App">
       <h1>Admissions in KIIT</h1>
            <Table data={dataTable} column={column}/>
    </div>
  );
}

export default Kiitt;
