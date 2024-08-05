import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem'
import Modal from '../components/Modal';
import styles from './PostList.module.css'
import { MdAddCircleOutline } from "react-icons/md";
import EditPost from './EditPost';
import AddPost from './AddPost';
import { fetchPosts, fetchTags } from '../store/slices/postsSlice';

const posts2 = [
    {
        id: 1,
        title: 'abcabcabcabcabcabcabca',
        date: '17:00:00',
        description: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: [{id: 1, name: '#qwe'}, {id: 2, name: '#asd'}, {id: 3, name: '#ghh'}],
        type: 'post'
    },
    {
        id: 2,
        title: 'abcabcabcabcabcabcabca2',
        date: '17:00:00',
        description: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: [{id: 1, name: '#qwe'}, {id: 2, name: '#123'}, {id: 3, name: '#rtf'}],
        type: 'post'
    },
    {
        id: 3,
        title: 'abcabcabcabcabcabcabca3',
        date: '17:00:00',
        description: 'abcabcabaasdadasdasdasdasdadasdasdasdasadasdsa',
        tags: [{id: 1, name: '#qwe'}, {id: 2, name: '#tyu'}, {id: 3, name: '#jkj'}],
        type: 'post'
    },
]

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error, available_tags } = useSelector((state) => state.posts);

  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
      dispatch(fetchTags());
    }
  }, [dispatch, status]);

  //console.log(posts);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleEditClick = (post) => {
    setEditingPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    setEditingPost(null);
    setNewPost(null);
  };

  const handleSavePost = (updatedPost) => {
    // Логика для сохранения обновленного поста
    console.log('Post saved:', updatedPost);
    handleCloseModal();
  }

  const handleAddPost = (post) => {
    setNewPost(post)
  }

  return (
    <div className={styles.post_list_container}>
      <div className={styles.post_list}>
        {posts.map(post => (
            <PostItem key={post.id} post={post} type={post.type} openPost={() => handlePostClick(post)} onEditClick={() => handleEditClick(post)} />
        ))}
        <div className={styles.add_button} onClick={handleAddPost}>
          <MdAddCircleOutline size={28} />
        </div>
      </div>
      {selectedPost && (
        <Modal onClose={handleCloseModal}>
          <div>
            <h1>{selectedPost.title}</h1>
            <p>Date: {selectedPost.date}</p>
            <p>{selectedPost.description}</p>
            <div>
              {selectedPost.tags?.map(tag => (
                <span key={tag.id} style={{ marginRight: '5px' }}>{tag.name}</span>
              ))}
            </div>
          </div>
        </Modal>
      )}
      {editingPost && (
        <Modal onClose={handleCloseModal}>
          <EditPost post={editingPost} onSave={handleSavePost} onClose={handleCloseModal} />
        </Modal>
      )}
      {newPost && (
        <Modal onClose={handleCloseModal}>
          <AddPost post={newPost} onSave={handleSavePost} onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  )
}

export default PostList