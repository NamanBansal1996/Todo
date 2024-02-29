import React from 'react'

import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs";
import "./table.css";

export default function Table() {
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
            <tr>
                <td>Home</td>
                <td>This is the main page</td>
                <td>
                    <span className='label label-live'>Live</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillPencilFill/>
                        <BsFillTrashFill/>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Page2</td>
                <td>This is the Second page</td>
                <td>
                    <span className='label label-draft'>Draft</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillPencilFill/>
                        <BsFillTrashFill/>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Page3</td>
                <td>This is the 3rd page page</td>
                <td>
                    <span className='label label-error'>error</span>
                </td>
                <td>
                    <span className='actions'>
                        <BsFillPencilFill/>
                        <BsFillTrashFill/>
                    </span>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
