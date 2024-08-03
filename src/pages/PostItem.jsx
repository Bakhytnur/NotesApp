import React from 'react';
import styles from './PostItem.module.css';
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";

const PostItem = ({title, date, desc, tags}) => {
  return (
    <div className={styles.post_container}>
      <div className={styles.buttons}>
        <TiEdit className={styles.edit_button} size={18} />
        <MdOutlineDeleteOutline className={styles.delete_button} size={18} />
      </div>
      <div className={styles.post}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
        <div className={styles.desc}>{desc}</div>
        <div className={styles.tags}>{tags.map(tag => <div className={styles.tag}>{tag}</div>)}</div>
      </div>
    </div>
  )
}

export default PostItem