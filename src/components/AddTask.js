import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <div className='entire'>

    
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Phone</label>
          <input
            type='text'
            placeholder='xxx-xxx-xxxx'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      
        <form className='form-control'>
        <label>Name</label>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name"/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name"/>
            </div>
          </div>
        </form>
        <div className='form-control'>
          <label>Email</label>
          <input
            type='text'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Select Vehicle</label>
          <input
            type='text'
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <i class="bi bi-plus"/>
        <input type='submit' value='Add New' className='btn btn-block' />
      </form>
    </div>
  )
}

export default AddTask