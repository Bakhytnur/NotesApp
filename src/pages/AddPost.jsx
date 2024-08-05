import React, { useState } from 'react';
import styles from './EditPost.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/slices/postsSlice';
import { v4 as uuidv4 } from 'uuid';

const AddPost = ({ onClose }) => {
  const dispatch = useDispatch();
  const available_tags = useSelector((state) => state.posts.available_tags);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  //console.log(post);

  const handleSave = () => {
    let uniqueId = uuidv4();
    const newPost = {
      id: uniqueId,
      title,
      date,
      description,
      tagNames: tags
      //tags: tags.map(name => ({ id: Date.now(), name }))
      //tags: tags.split(',').map(tag => tag.trim())
    };
    
    console.log(newPost);
    dispatch(addPost(newPost));
    onClose();
  };

  const saveTag = () => {
    console.log(tag);
    if (tag.trim()) {
      setTags(prevTags => [...prevTags, tag.trim()]);
      setTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t.name !== tagToRemove.name));
  };

  const handleTagChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setTag(selectedOptions.join(', ')); // Преобразуем массив в строку
  };

  return (
    <div className={styles.editPost}>
      <h2>Add Post</h2>
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
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Tags</label>
        {/*<input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />*/}
        <select multiple value={tags} onChange={handleTagChange}>
          {available_tags.map(tag => (
            <option key={tag.id} value={tag.name}>{tag.name}</option>
          ))}
        </select>
        <div className={styles.field}>
          <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
          <button onClick={saveTag}>Save tag</button>
        </div>
        <div className={styles.tags}>
          {tags.length > 0 ? tags.map((t, index) => (
            <div className={styles.tag} key={index}>
              {t} 
              <button onClick={() => removeTag(t)}>Remove</button>
            </div>
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
