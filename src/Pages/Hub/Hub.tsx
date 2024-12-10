import React from "react";
import styles from "./Hub.module.css";

export default function Hub() {
  return (
    <div className={styles.divHub}>
      <h2>Hub</h2>
      <p>conheça nossa comunidade e interaja</p>

      <div className={styles.divHubMain}>
        <div className={styles.divPosts}>
          <h3>Posts</h3>
          <div className={styles.divPostsOne}>
            <div className={styles.divPostsHeader}>
              <button>Image avatar</button>
            </div>
            <div className={styles.divPostsMain}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              dolore quae voluptatem quod. Tempora sint quasi cum fugiat quod
              quibusdam iste illum, esse sit nobis, distinctio eum
              necessitatibus unde magnam!
            </div>
            <div className={styles.divPostsFooter}>
              <button className={styles.divPostsFooterButtons}>Curtir</button>
              <button className={styles.divPostsFooterButtons}>
                Compartilhar
              </button>
            </div>
          </div>
          <button>Anterior</button>
          <button>Próximo</button>
        </div>

        <hr />

        <div className={styles.divModels}>
          <h3>Modelos</h3>
          <span>some carroussel</span>
          <p>Descrição do modelo</p>
          <button>Baixar</button>
          <br />
          <button>Anterior</button>
          <button>Próximo</button>
        </div>

        <hr />

        <div className={styles.divCommunity}>
          <h3>Comunidade</h3>
        </div>

        <hr />

        <div className={styles.divTeams}>
          <h3>Equipes</h3>
          <p>junte-se a uma equipe e comece a fazer a diferença em conjunto!</p>
        </div>
      </div>
    </div>
  );
}
