import React, { useState, useContext } from 'react';
import { Col, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { PostContext } from '../../Context/PostContext/PostContext';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      await addPost({ title, content });
      setTitle('');
      setContent('');
      navigate('/postlist');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Col xs={12} sm={12} md={10} lg={8} xl={12}>
        <div className="box p-5 border rounded">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto p-2 text-center ">
                  <Nav.Link href="/" className='col-7 ms-4 fw-bold'>Home</Nav.Link>
                  <Nav.Link href="postlist" className='col-7 ms-4 fw-bold'>Postlist</Nav.Link>
                  <Nav.Link  className='col-7 ms-4 fw-bold'>PostDetail</Nav.Link>
                  <Nav.Link  className='col-7 ms-4 fw-bold text-primary'>Blog</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="from-type d-flex border flex-column flex-lg-row border-dark rounded p-5">
            <div className="box-1 col-12 col-lg-6 p-3  p-3 me-5" >
              <form onSubmit={handleSubmit}>
                <h1 className='text-center mb-5 fw-bold'>𝘊𝘳𝘦𝘢𝘵𝘦 𝘗𝘰𝘴𝘵
                </h1>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  required
                  className="form-control mb-2 p-2 mb-3"
                />
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                  required
                  className="form-control mb-4"
                />
                <button type="submit" className="btn btn-dark">Add Post</button>
              </form>
            </div>
            <div className="box-2 col-4 col-12 col-lg-6 col-md-12 col-xs-12   shadow-lg p-5">
              <h1><em>𝒉𝒆𝒍𝒍𝒐 </em></h1>
              <h1><em> 𝒃𝒍𝒐𝒈𝒆𝒓</em></h1>
              <p className='mt-5'>𝒃𝒍𝒐𝒈𝒆𝒓𝒑𝒐𝒔𝒕@.𝒄𝒐𝒎 </p>
            </div>
          </div>
       </div>
      </Col>
    </Container>
  );
};

export default CreatePost;

