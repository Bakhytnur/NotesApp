import React, { useState } from 'react';
import styles from './EditPost.module.css';
import { useDispatch } from 'react-redux';
import { updatePost } from '../store/slices/postsSlice';
import { v4 as uuidv4 } from 'uuid';

const EditPost = ({ post, onClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(post.title || '');
  const [date, setDate] = useState(post.date || '');
  const [description, setDescription] = useState(post.description || '');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(post.tags !== null ? post.tags : []);

  //console.log(post);
  console.log(tags);

  const handleSave = () => {
    const updatedPost = {
      ...post,
      title,
      date,
      description,
      tagNames: tags
      //tagNames: tags
      //tags: tags.split(',').map(tag => tag.trim())
    };
    dispatch(updatePost(updatedPost));
    onClose();
    console.log(updatedPost);
  };

  const saveTag = () => {
    if (tag.trim() && !tags.find(t => t.name === tag.trim())) {
      let uniqueId = uuidv4();
      setTags(prevTags => [...prevTags, { id: uniqueId, name: tag.trim() }]);
      setTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t.name !== tagToRemove.name));
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
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Tags</label>
        {/*<input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />*/}
        <div className={styles.field}>
          <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
          <button onClick={saveTag}>Add Tag</button>
        </div>
        <div className={styles.tags}>
          {tags.length > 0 ? tags.map((t, index) => (
            <div className={styles.tag} key={index}>
              {t.name}
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

export default EditPost;
