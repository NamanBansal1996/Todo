import React from 'react'
import { useState } from 'react';
import './Modal.css';

export const  Modal=({closeModal,onSubmit})=> {

  const[formState,setFormState] = useState({
    page:"",
  description:"",
  status:"live"
});

  const handleChange = (e) =>{
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit(formState)
    closeModal();

  }

  return (
    <div className='modal-container' 
    onClick={(e)=>{
      if (e.target.className==='modal-container')
      closeModal()
    }}
    >
      <div className='modal'>0
        <form>
            <div className='form-group'>
                <label htmlFor='page'>Page</label>
                <input name='page' value={formState.page} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Description</label>
                <input name='page' value={formState.page} onChange={handleChange}/>
                <textarea name='page' value={formState.description} />
            </div>
            <div className='form-group'>
                <label htmlFor='status'>Status</label>
                <input name='page' value={formState.page} onChange={handleChange}/>
                <select name='status' value={formState.status} >
                    <option value='live'>Live</option>
                    <option value='draft'>Draft</option>
                    <option value='error'>Error</option>
                </select>
            </div>
            <button type='submit' className='btn'onClick={handleSubmit}>Submit</button>
        </form>

      </div>
    </div>
  )
}
export default Modal;
