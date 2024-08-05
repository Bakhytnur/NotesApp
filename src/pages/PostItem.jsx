import React, { useState } from 'react';
import styles from './PostItem.module.css';
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removePost } from '../store/slices/postsSlice';

const PostItem = ({post, type, openPost, onEditClick}) => {
  //console.log(post.tags);
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(removePost(post.id));
  }

  return (
    <div className={styles.post_container}>
      <div className={styles.buttons}>
        <TiEdit className={styles.edit_button} size={18} onClick={onEditClick} />
        <MdOutlineDeleteOutline className={styles.delete_button} size={18} onClick={deletePost} />
      </div>
      
      <div className={styles.post} onClick={openPost}>
        {type !== 'post' ? (
          <div>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.date}>{post.date}</div>
            <div className={styles.description}>{post.description}</div>
            <div className={styles.tags}>{post.tags?.map(tag => <div key={tag.id} className={styles.tag}>{tag.name}</div>)}</div>
          </div>
        ) : (
          <div>
            <div className={styles.img}>img</div>
            <div className={styles.description}>{post.description}</div>
            <div className={styles.tags}>{post.tags?.map(tag => <div key={tag.id} className={styles.tag}>{tag.name}</div>)}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostItem