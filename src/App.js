import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import UpdateForm from './components/UpdateForm.jsx'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Color from '../src/components/color/color'

function App() {

  
  const [toDo, setToDo] = useState([
    {id: 1, title: 'Title 1', desc: '', isCompleted: false, isDeleted: false},
    {id: 2, title: 'Title 2', desc: '', isCompleted: false, isDeleted: false}
  ])

 
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')


  const addTask = () => {
    if(newTask) {
      let num = toDo
      
      setToDo([
        ...toDo, 
        { id: num, title: newTask, status: false }
      ])

      setNewTask('')

    }
    else {
      return alert('No task written. Please write something')
    }
  }


  const deleteTask = (id) => {
    
   
    setToDo(toDo.filter(task => task.id !== id))

  }

  
  const markDone = (id) => {
    
     let newTask = toDo.map( task => {
       if( task.id === id ) {
         return ({ ...task, isCompleted: true, status: !task.status })
       } 
       return task;
     })
     setToDo(newTask)
     
     
     const todo = toDo.find(e => e.id === id); 
     todo.isCompleted = true 
     setToDo([...toDo]) 
  }


  const cancelUpdate = () => {
    setUpdateData('')
  }

  
  const changeHolder = (e) => {
    setUpdateData({...updateData, title: e.target.value})
  }

 
  const updateTask = () => {
    
    
    let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
    setToDo([
      ...removeOldRecord, 
      updateData
    ])
    
    setUpdateData('')

  }

  return (
    <div className="container App">
      {/*<Color addTask={addTask} />*/}
      

    <br /><br />
    <h2>to.Do</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {toDo && toDo.length ? '' : 'No Tasks...'}
   

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  

    </div>
    
  );
}

export default App;
