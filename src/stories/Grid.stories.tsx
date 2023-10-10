import { Meta, StoryObj } from "@storybook/react";
import { Container, Row, Col } from "react-awesome-styled-grid";

const meta: Meta = {
  title: "Foundation/Grid",
  component: Container,
};

export default meta;

export const JustifyContent: StoryObj = {
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
