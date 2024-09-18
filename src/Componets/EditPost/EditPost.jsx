import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../../Context/PostContext/PostContext';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';

const EditPost = () => {
  const { id } = useParams();
  const { posts, editPost } = useContext(PostContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts.find(p => p.id === parseInt(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      navigate('/');
    }
  }, [id, posts, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      await editPost({ id: parseInt(id), title, content });
      navigate('/postlist'); 
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Col xs={12} sm={12} md={10} lg={8} xl={12}>
        <div className="box p-5 border rounded">
          <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto p-2 text-center">
                  <Nav.Link href="/" className='col-7 ms-4 fw-bold'>Home</Nav.Link>
                  <Nav.Link href="/postlist" className='col-7 ms-4 fw-bold'>Postlist</Nav.Link>
                  <Nav.Link href="#" className='col-7 ms-4 fw-bold'>PostDetail</Nav.Link>
                  <Nav.Link href="#" className='col-7 ms-4 fw-bold text-primary'>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h2>Edit Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control mb-3"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-dark">Update Post</button>
          </form>
        </div>
      </Col>
    </Container>
  );
};

export default EditPost;
