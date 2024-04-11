import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Col lg={1}></Col>
        <Col lg={5}>
          <h1 className="text-dark">
            <strong>Welcome to</strong>{" "}
            <span className="text-primary">Media Player</span>
          </h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            reiciendis sequi ipsam quas corrupti corporis a quae, vel eos
            commodi porro doloremque consequuntur esse dolore ducimus non ad?
            Illo, eligendi!
          </p>
          <button onClick={()=>navigate('/home')} className="btn btn-primary mt-5">Get Started</button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img
            style={{ width: "500px", height: "400px" }}
            className="mt-4"
            src="https://miro.medium.com/v2/resize:fit:679/0*JuNmyK8aJkqKt6vO.gif"
            alt=""
          />
        </Col>
      </Row>
      <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3>Features</h3>
        <div className=" d-flex justify-content-center align-itmes-center">
          <Card className="p-4 m-3" style={{ width: "22rem" }}>
            <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://www.dyspatch.io/wp-content/uploads/2020/09/gif-vs-video.gif" />
            <Card.Body>
              <Card.Title className="text-center text-primary"><>Managing Video</></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card className="p-4 m-3" style={{ width: "22rem" }}>
            <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://cdn.dribbble.com/users/7253/screenshots/1040385/folders.gif" />
            <Card.Body>
              <Card.Title className="text-center text-primary">Categorised Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card className="p-4 m-3" style={{ width: "22rem" }}>
            <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.imgur.com/YygWODn.gif" />
            <Card.Body>
              <Card.Title className="text-center text-primary">Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </div>
      </div>

    <div className="w-100 d-flex justify-content-center align-items-center mt-5">
     <div className="row w-100">
      <div className="col-md-1"></div>
      <div className="col-md-10">
      <div className="row border border-primary rounded border-2 w-100 p-5"style={{borderColor:'lightblue'}}>
          <div className="col-md-5">
          <h3 style={{fontSize:'36px',fontWeight:'600'}}>Simple fast and powerfull</h3>
          <h6 className="mt-5 text-dark"><span style={{fontSize:'28px'}} className="text-primary">Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cum facilis harum.</h6>
          <h6 className="mt-4 text-dark" ><span style={{fontSize:'28px'}} className="text-primary">Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint recusandae eos tempore.</h6>
          <h6 className="mt-4 text-dark"><span style={{fontSize:'28px'}} className="text-primary">Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veritatis at suscipit.</h6>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
          <iframe width="100%" height={'400px'}  src="https://www.youtube.com/embed/7Rg0y7NT1gU" title="SEE — Official Trailer | Apple TV+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>

      </div>
      <div className="col-md-1"></div>
     </div>
  

    </div>
    </>
  );
}

export default LandingPage;
