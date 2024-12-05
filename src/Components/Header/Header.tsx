import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

// IMAGES

import Logo from '../../assets/images/logo_taskpilot.png';

// ICONS

import Icone_Configuracao from '../../assets/icons/general/icon_config.png';
import Icone_User from '../../assets/icons/general/icon_user.png';
import Icone_Sobre from '../../assets/icons/general/icon_sobre.png';
import Icone_Pages from '../../assets/icons/general/icon_pages.png';

export default function Header() {

    const [pagesVisible, setPagesVisible] = useState(false);

    function handlePagesVisible() { setPagesVisible(!pagesVisible) };

    const pagesVisibleController = pagesVisible ? {display: 'inline-block'} : {display: 'none'};

    return(

        <header>
            
            <div className={styles.divHeaderLeft}>
                <img src={Icone_Pages} onClick={() => handlePagesVisible()} className={styles.imgIcons} alt="Icone pages"/>
            </div>
            
            <div className={styles.divHeaderPages} style={pagesVisibleController}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Tarefas</li>
                    <li>Projetos</li>
                    <li>Times</li>
                    <li>Report</li>
                    <li>Perfil</li>
                    <li>Configurações</li>
                    <li>Sobre</li>
                </ul>
            </div>

            <div className={styles.divHeaderCenter}>
                <img src={Logo} alt="Logo principal"/>
            </div>

            <div className={styles.divHeaderRight}>
                <img src={Icone_Configuracao} className={styles.imgIcons} alt="Icone configuração"/>
                <img src={Icone_User} className={styles.imgIcons} alt="Icone usuário"/>
                <img src={Icone_Sobre} className={styles.imgIcons} alt="Icone sobre"/>
            </div>
        </header>
    )
}