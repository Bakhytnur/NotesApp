import React, { useState } from 'react';
import styles from './EditPost.module.css';

const EditPost = ({ post, onSave, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [date, setDate] = useState(post.date);
  const [desc, setDesc] = useState(post.desc);
  //const [tags, setTags] = useState(post.tags);

  console.log(post);

  const handleSave = () => {
    const updatedPost = {
      ...post,
      title,
      date,
      desc,
      //tags: tags.split(',').map(tag => tag.trim())
    };
    onSave(updatedPost);
  };

  return (
    <div className={styles.editPost}>
      <h2>Edit Post</h2>
      <div className={styles.field}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Date</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Description</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Tags</label>
        {/*<input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />*/}
        <div className={styles.tags}>
          {post.tags?.map(tag => (
            <div className={styles.tag} key={tag.id}>{tag.name}</div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditPost;
