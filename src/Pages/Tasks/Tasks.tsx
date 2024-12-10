import React from "react";
import styles from "./Tasks.module.css";

export default function Tasks() {
  return (
    <div className={styles.divTasks}>
      <div className={styles.divTasksAdd}>
        <h2>Adicionar tarefa</h2>
        <span className={styles.spanTasksAddTitle}>Nome da tarefa</span>
        <input className={styles.inputsTasksAdd} type="text" />
        <span className={styles.spanTasksAddTitle}>Descrição da tarefa</span>
        <textarea className={styles.inputsTasksAdd} />
        <span className={styles.spanTasksAddTitle}>Prazo</span>
        <input className={styles.inputsTasksAdd} type="date" />
        <button id={styles.buttonTasksAdd}>Adicionar</button>
      </div>

      <div className={styles.divTasksSprint}>
        <h2>Sprint Name</h2>
        <div className={styles.divTasksCategory}>
          <h3>Categoria</h3>

          <div className={styles.divTasksOne}>
            <div className={styles.divTasksOneName}>
              <span className={styles.spanTasksOneTitleAction}>Nome</span>
              <p>vitukjkkk</p>
            </div>
            <div className={styles.divTasksOneDescricao}>
              <span className={styles.spanTasksOneTitleAction}>Descrição</span>
              <p>Descrição tarefa</p>
            </div>
            <div className={styles.divTasksOnePrazo}>
              <span className={styles.spanTasksOneTitleAction}>Prazo</span>
              <p>20/02/2024</p>
            </div>
            <div className={styles.divTasksOneSituation}>
              <select>
                <option>Resolvida</option>
                <option>Pendente</option>
                <option>Fechada</option>
              </select>
            </div>
            <div className={styles.divTasksOneAction}>
              <button>Editar</button>
            </div>
          </div>

          <div className={styles.divTasksOne}>
            <div className={styles.divTasksOneName}>
              <span className={styles.spanTasksOneTitleAction}>Nome</span>
              <p>vitukjkkk</p>
            </div>
            <div className={styles.divTasksOneDescricao}>
              <span className={styles.spanTasksOneTitleAction}>Descrição</span>
              <p>Descrição tarefa</p>
            </div>
            <div className={styles.divTasksOnePrazo}>
              <span className={styles.spanTasksOneTitleAction}>Prazo</span>
              <p>20/02/2024</p>
            </div>
            <div className={styles.divTasksOneSituation}>
              <select>
                <option>Resolvida</option>
                <option>Pendente</option>
                <option>Fechada</option>
              </select>
            </div>
            <div className={styles.divTasksOneAction}>
              <button>Editar</button>
            </div>
          </div>

          <div className={styles.divTasksOne}>
            <div className={styles.divTasksOneName}>
              <span className={styles.spanTasksOneTitleAction}>Nome</span>
              <p>vitukjkkk</p>
            </div>
            <div className={styles.divTasksOneDescricao}>
              <span className={styles.spanTasksOneTitleAction}>Descrição</span>
              <p>Descrição tarefa</p>
            </div>
            <div className={styles.divTasksOnePrazo}>
              <span className={styles.spanTasksOneTitleAction}>Prazo</span>
              <p>20/02/2024</p>
            </div>
            <div className={styles.divTasksOneSituation}>
              <select>
                <option>Resolvida</option>
                <option>Pendente</option>
                <option>Fechada</option>
              </select>
            </div>
            <div className={styles.divTasksOneAction}>
              <button>Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}