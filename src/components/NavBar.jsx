import React from "react"
import style from './NavBar.module.css'
import img from '../assets/lista-de-tarefas.png'

export default function NavBar(){
    return(
        <div>
            <nav className={style.nav}>
                <div className={style.content}>
                  <img src={img} className={style.img} alt="task img"/>
                  <h1 className={style.h1}>Lista de Tarefas</h1>
                  <img src={img} className={style.img} alt="task img"/>
                </div>
            </nav>
        </div>
    )
}