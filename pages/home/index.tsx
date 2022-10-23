import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Container className="mb-5">
        <Row>
          <Col className="text-center">
            <video
              style={{ marginTop: "-10%" }}
              width="70%"
              src="/assets/stratusVideo.mp4"
              autoPlay
              muted
            />
          </Col>
        </Row>
        <Row className="text-center" >
          <Col xs={12} md={2} className="py-5">
            <a href="/realisations">{"Réalisation"}</a>
          </Col>
          <Col xs={12} md={2} className="py-5">
            <a href="">{"L'équipe"}</a>
          </Col>
          <Col xs={12} md={2} className="py-5">
            <a href="">{"Tarif/Abonnement"}</a>
          </Col>
          <Col xs={12} md={2} className="py-5">
            <a href="">{"FAQ"}</a>
          </Col>
          <Col xs={12} md={2} className="py-5">
            <a href="">{"Contacts"}</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

