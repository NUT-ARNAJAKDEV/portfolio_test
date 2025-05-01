import React from 'react'
import styles from './Skills.module.css'
import { FaPython, FaSquareJs, FaReact, FaGolang, FaGitAlt, FaNode } from 'react-icons/fa6'

function Skills() {
    return (
        <div className={styles.skills_con}>
            <h3 className={styles.title}>My Skills Set</h3>
            <ul className={styles.skills_list}>
                <li><FaPython /></li>
                <li><FaSquareJs /></li>
                <li><FaReact /></li>
                <li><FaGolang /></li>
                <li><FaGitAlt /></li>
                <li><FaNode /></li>
            </ul>
        </div>
    )
}

export default Skills
