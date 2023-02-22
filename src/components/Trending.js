import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/image/Trending/dune.jpg";
import everythingImage from "../assets/image/Trending/everything.jpg";
import infiniteImaga from "../assets/image/Trending/infinite.jpg";
import jokerImage from "../assets/image/Trending/joker.jpg";
import lightyearImage from "../assets/image/Trending/lightyear.jpg";
import morbiusImage from "../assets/image/Trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white"> TRENDING FILM </h1>
        <Row>
          <Col md={4} className="movieWrapper" id="Trending">
            <Card className=" taxt-canter movieImage">
              <Image src={duneImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={everythingImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EVERITHINK</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={infiniteImaga} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={jokerImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={lightyearImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting .</Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" taxt-canter movieImage">
              <Image src={morbiusImage} alt="Dune" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Trending;
