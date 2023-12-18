import { useState } from "react";
import style from './Form.module.css'

export default function Form({ addTask }){

  const [tarefa, setNovaTarefa] = useState('')
  const [data, setNovaData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarefa && data) {
      addTask({ tarefa, data });
      setNovaTarefa("");
      setNovaData("");
    }
  };

    return(
        <div className={style.container}>
            <div className={style.content}>
                <form onSubmit={handleSubmit}>
                    <div className={style.group}>
                      <label className={style.label}><strong>Digite a tarefa:</strong></label>
                      <input className={style.input} value={tarefa} name="tarefa" type="text" onChange={(e) => setNovaTarefa(e.target.value)} required/> <br/>
                    </div>

                    <div className={style.group}>
                      <label className={style.label}><strong>Data:</strong></label>
                      <input className={style.inputDate} value={data} name="data" type="date" onChange={(e) => setNovaData(e.target.value)} required/>
                    </div>
                 
                  <button type="submit" className={style.button}>Salvar</button>
                </form>
            </div>
        </div>
    )
}
