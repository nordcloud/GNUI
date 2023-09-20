import { Container, Row, Col } from "react-awesome-styled-grid";
import { Text } from "../components/text";
import theme from "../theme";

export default {
  title: "Foundation/Grid",
  component: Container,
};

export const JustifyContent = {
  render: () => {
    return (
      <Container>
        <Row>
          <Col xs={4} md={2}>
            Col A
          </Col>
          <Col xs={4} md={6}>
            Col B
          </Col>
        </Row>
      </Container>
    );
  },

  name: "justifyContent",
};
