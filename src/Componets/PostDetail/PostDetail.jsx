import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../../Context/PostContext/PostContext';
import { Container, Col, Navbar, Nav, Button } from 'react-bootstrap';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, removePost } = useContext(PostContext);

  const post = posts.find(p => p.id === parseInt(id));

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await removePost(post.id);
      navigate('/');
    }
  };

  if (!post) return <div>Post not found</div>;

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
          <div className="from-type text-center border  border-dark rounded p-5">
            <h2>{post.title}</h2>
            <p> {post.content}</p>
            <p className='text-danger'> Date : {new Date(post.date).toLocaleDateString()}</p>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default PostDetail;
