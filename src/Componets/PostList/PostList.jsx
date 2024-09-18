import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../Context/PostContext/PostContext';
import { Col, Container, Navbar, Nav } from 'react-bootstrap';

const PostList = () => {
  const { posts, removePost } = useContext(PostContext);

  useEffect(() => {
    console.log('Posts:', posts); 
  }, [posts]);

  const handleDelete = async (id, e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this post?')) {
      await removePost(id);
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Col xs={12} sm={12} md={6} lg={4} xl={12} xxl={12}>
          <div className="box p-5 border rounded">
            <Navbar expand="lg" className="bg-body-tertiary mb-4">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto p-2 text-center">
                    <Nav.Link as={Link} to="/" className="col-7 ms-5 fw-bold">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/postlist" className="col-7 ms-4 fw-bold">
                      Post List
                    </Nav.Link>
                    <Nav.Link as={Link}  className="col-7 ms-4 fw-bold">
                      Post Detail
                    </Nav.Link>
                    <Nav.Link as={Link} to="/blog" className="col-7 ms-4 fw-bold text-primary">
                      Blog
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <div className="form-type border border-dark rounded">
              <h2 className="text-center p-4">𝑨𝒍𝒍 𝑷𝒐𝒔𝒕</h2>

              <div className="form d-flex flex-row">
                <div className="box-1 col-6 p-3 me-5 ">
                  <ul className="text-center">
                    {posts.map((post) => (
                      <li key={post.id} className="mb-3">
                        <Link to={`/posts/${post.id}`} className="fw-bold">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="box-2 col-6 p-3 ">
                  {posts.map((post) => (
                    <div key={post.id} className="d-flex justify-content-center mb-3">
                      <button
                        onClick={(e) => handleDelete(post.id, e)}
                        className="btn btn-dark ms-5 me-4"
                      >
                        Delete
                      </button>
                      <Link to={`/edit/${post.id}`}>
                        <button className="btn btn-dark">Edit</button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default PostList;
