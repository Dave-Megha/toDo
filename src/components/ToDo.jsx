import React from 'react';
import App from '../App'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ setToDo,id, toDo, markDone, setUpdateData, deleteTask, props}) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="col taskBg" >
              <div className={ task.status ? 'done' : '' }>
              
                <span className="taskText">{task.title}</span>
                <span className="taskText">{task.desc}</span>
                <textarea className='msg' placeholder='description...'></textarea>
              </div>
              <div className="iconsWrap">
                
                <span title="Completed / Not Completed"
                  onClick={ () => setToDo(markDone(task.id)) } 
                >
                 <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                  
                 
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData(task) }
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      } 
      <div className="cmp-container">
      <h4>Completed</h4>
      <div className='card-list'>
          {
              toDo.map((toDo) => {
                if(toDo.isCompleted) {
                   return (!toDo.isDeleted && <App key={toDo.id} id={toDo.id} title={toDo.title} desc={toDo.desc} isCompleted={toDo.markDone} delete={deleteTask}/>)
                } else {
                  return <></>
                }
              })
            }
          </div>



      </div> 
    </>
  )
}

export default ToDo;

