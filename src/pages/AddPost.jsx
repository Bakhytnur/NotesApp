import React, { useState } from 'react';
import styles from './EditPost.module.css';

const AddPost = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  //console.log(post);

  const handleSave = () => {
    const newPost = {
      title,
      date,
      desc,
      tags: tags.map(name => ({ id: Date.now(), name }))
      //tags: tags.split(',').map(tag => tag.trim())
    };
    onSave(newPost);
  };

  const saveTag = () => {
    if (tag.trim()) {
      setTags(prevTags => [...prevTags, tag.trim()]);
      setTag('');
    }
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
        <div className={styles.field}>
          <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
          <button onClick={saveTag}>Save tag</button>
        </div>
        <div className={styles.tags}>
          {tags.length > 0 ? tags.map((t, index) => (
            <div className={styles.tag} key={index}>{t}</div>
          )) : 'Add your tags'}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddPost;
