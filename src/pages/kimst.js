import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import './table.css'
//import Entry from './pages/Entry';
function Kimst() {

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
    axios("http://192.168.37.145:5000/api/kims/getdata")
    .then(res => setDataTable(res.data))
    .catch(err => console.log(err))
  },[]);

  const column = [
    { heading: 'Uh id', value:'uhid_no' },
    { heading: 'Name', value: 'patient_name' },
    { heading: 'Phone', value: 'patient_ph' },
    { heading: 'Avail Date', value: 'avail_date' },
    { heading: 'Bill id', value: 'bill_id' },
    // { heading: 'Document', value: 'bill_img' },
  ]

  return (
    <div className="App">
       <h1>Recommened KIMS</h1>
            <Table data={dataTable} column={column}/>
        
    </div>
  );
}

export default Kimst;
