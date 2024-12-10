import React, { useState } from "react";
import styles from "./Home.module.css";

import Tasks from "../Tasks/Tasks";
import Graphics from "../Graphics/Graphics";
import Calendar from "../Calendar/Calendar";
import Hub from "../Hub/Hub";

export default function Home() {
  return (
    <div className={styles.divHome}>
      <h1>TaskPilot</h1>
      <div className={styles.divHomeFrases}>
        <div className={styles.divHomeFrasesOne}>
          <h3>"Organize suas tarefas de forma simples e eficiente"</h3>
          <p>
            Gerencie suas atividades diárias com facilidade e aumente sua
            produtividade com a interface intuitiva do TaskPilot
          </p>
        </div>
        <div className={styles.divHomeFrasesOne}>
          <h3>"Controle total sobre seus prazos e compromissos"</h3>
          <p>
            Fique no controle de todas as suas tarefas, defina prioridades e
            nunca perca um prazo novamente.
          </p>
        </div>
        <div className={styles.divHomeFrasesOne}>
          <h3>"A solução ideal para aumentar sua produtividade"</h3>
          <p>
            Com TaskPilot, você tem uma visão clara das suas tarefas e prazos,
            ajudando você a focar no que realmente importa.
          </p>
        </div>
        <div className={styles.divHomeFrasesOne}>
          <h3>"Sua jornada de organização começa aqui"</h3>
          <p>
            Desde simples listas até projetos complexos, TaskPilot torna a
            organização do seu dia a dia mais fácil e eficiente.
          </p>
        </div>
      </div>
      <h3>eai, o que achou?</h3>
      LOGIN OU ADD TAREFA - CRIAR CONDICIONAL
      <div className={styles.divHomeTarefas}>
        <Tasks />
      </div>
      <div className={styles.divHomeGraphics}>
        <Graphics />
      </div>
      <div className={styles.divHomeCalendar}>
        <Calendar />
      </div>
      <div className={styles.divHomeHub}>
        <Hub />
      </div>
    </div>
  );
}
