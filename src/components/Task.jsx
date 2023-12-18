import React from "react";
import style from './Task.module.css'
import { FaTrash } from 'react-icons/fa'

export default function Task({ tasks, onDelete }){
    return(
        <div className={style.container}>
            <div className={style.content}>
                <table className={style.table}>
                    <thead>
                      <tr>
                        <th className={style.th}>Tarefas</th>
                        <th className={style.th}>Data</th>
                        <th className={style.th}>Ações</th>
                      </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td className={style.td}>{task.tarefa}</td>
                                <td className={style.td}>{task.data}</td>
                                <td className={style.tdIcons}>
                                  <FaTrash className={style.icon} onClick={() => onDelete(index)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}