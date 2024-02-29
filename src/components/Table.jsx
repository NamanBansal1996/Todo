import React from 'react'

import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs";
import "./table.css";

export const Table=({rows, deleteRow,editRow})=> {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
            <tr>
                <th>Page</th>
                <th className='expand'>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                rows.map((row,idx)=>{
                    const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                    return<tr key={idx}>
                    <td>{row.page}</td>
                    <td className='expand'>{row.description}</td>
                    <td >
                        <span className={`label label-${statusText}`}>{row.status}
                        </span>
                    </td>
                    <td>
                    <span className='actions'>
                        <BsFillPencilFill onClick={()=> editRow(idx)}/>
                        <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                    </span>
                </td>
                    </tr>
                })
            }
            
        </tbody>
      </table>
    </div>
  )
}
export default Table;
