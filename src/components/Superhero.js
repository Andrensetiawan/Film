import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/image/superhero/antman.jpg";
import avangerImage from "../assets/image/superhero/avenger.jpg";
import batmanImage from "../assets/image/superhero/batman.jpg";
import robinhoodImage from "../assets/image/superhero/robinhood.jpg";
import spidermanImage from "../assets/image/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/image/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white"> SUPERHERO </h1>
        <Row>
          <Col md={4} className="movieWrapper" id="Superhero">
            <Card className=" taxt-canter movieImage">
              <Image src={antmanImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANT-MAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={avangerImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVANGER</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={batmanImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BAT-MAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={robinhoodImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={spidermanImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDER-MAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={supermanImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPER-MAN</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
