import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';

function App() {
  const[modalOpen, setModalOpen] = useState(false);


const [rows,setRows] = useState([
  {page:"page1",description:"This is the first page", status:"live"},
  {page:"page2",description:"This is the second page", status:"draft"},
  {page:"page3",description:"This is the third page", status:"error"}
]);

const handleDeleteRow = (targetIndex)=>{
  setRows(rows.filter((_,idx) => idx !== targetIndex))
};


const handleSubmit = (newRow)=>{
  setRows([...rows, newRow])
}
  return (
    <div className="App">
      <Table rows= {rows} deleteRow = {handleDeleteRow}/>
      <button className='btn' onClick={()=>setModalOpen(true)}>Add</button>
      {modalOpen && (
      <Modal
      closeModal={() => {
        setModalOpen(false);
      }}
      onSubmit={handleSubmit}
      />
      )}
    </div>
  );
}

export default App;
