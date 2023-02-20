const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return(
    <>
      
      <div className="row">
        <div className="col">
          <input 
          placeholder="Write your tasks..."
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
          <br/>
          <h4 className="pen-contaier">Pending</h4>
        </div>
        <div className="col-auto">
          <button
            onClick={addTask}
            className="btn btn-lg btn-success" 
          >Add Task</button>
        </div>
      </div>
      
      <br />
    </>
  )
}

export default AddTaskForm;