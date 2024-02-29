import React from 'react'
import './Modal.css';

export default function Modal() {
  return (
    <div className='modal-container'>
      <div className='modal'>
        <form>
            <div className='form-group'>
                <label htmlFor='page'>Page</label>
                <input name='page'/>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <textarea name='page'/>
            </div>
            <div className='form-group'>
                <label htmlFor='status'>Status</label>
                <select name='status'>
                    <option value='live'>Live</option>
                    <option value='draft'>Draft</option>
                    <option value='error'>Error</option>
                </select>
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>

      </div>
    </div>
  )
}
