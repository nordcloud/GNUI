import { Meta, StoryObj } from "@storybook/react";
import { Container, Row, Col } from "react-awesome-styled-grid";
import { useDisclosure } from "../../hooks";
import { Button } from "../button";
import { PaginationBox } from "../pagination/Pagination";
import { Text } from "../text";
import { Sidebar } from "./Sidebar";

const meta: Meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  id: "sidebar",
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Button onClick={open}>Click button to open sidebar</Button>
        </Row>
        <Sidebar
          title="Default sidebar"
          caption="Default sidebar caption"
          isOpen={isOpen}
          onClick={close}
        >
          Sidebar Content
        </Sidebar>
      </Container>
    );
  },

  name: "default",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const Footer: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    function Footer() {
      return (
        <>
          <Button onClick={close}>Cancel</Button>
          <Button>Update</Button>
        </>
      );
    }

    return (
      <Container>
        <Row justify="center">
          <Button onClick={open}>Click button to open sidebar</Button>
        </Row>
        <Sidebar
          title="Default sidebar"
          isOpen={isOpen}
          footer={<Footer />}
          onClick={close}
        >
          Sidebar Content
        </Sidebar>
      </Container>
    );
  },

  name: "footer",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const FooterPagination: StoryObj = {
  render: () => {
    const { isOpen, open, close } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Button onClick={open}>Click button to open sidebar</Button>
        </Row>
        <Sidebar
          title="Default sidebar"
          isOpen={isOpen}
          footer={
            <PaginationBox
              sidebar
              small
              count={400}
              from={0}
              size={20}
              setPage={0}
              setSize={20}
            />
          }
          onClick={close}
        >
          Sidebar Content
        </Sidebar>
      </Container>
    );
  },

  name: "footer pagination",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const Side: StoryObj = {
  render: () => {
    const {
      isOpen: isOpenLeft,
      open: openLeft,
      close: closeLeft,
    } = useDisclosure();

    const {
      isOpen: isOpenRight,
      open: openRight,
      close: closeRight,
    } = useDisclosure();

    return (
      <Container>
        <Row justify="center">
          <Text>Click button to open sidebar.</Text>
        </Row>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openLeft}>← Left sidebar</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRight}>Right Sidebar →</Button>
          </Col>
        </Row>
        <Sidebar
          title="Default sidebar"
          isOpen={isOpenRight}
          onClick={closeRight}
        >
          Sidebar Content
        </Sidebar>
        <Sidebar
          side="onLeft"
          title="Left sidebar"
          isOpen={isOpenLeft}
          onClick={closeLeft}
        >
          Sidebar Content
        </Sidebar>
      </Container>
    );
  },

  name: "side",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};

export const CustomWidth: StoryObj = {
  render: () => {
    const {
      isOpen: isOpenPercent,
      open: openPercent,
      close: closePercent,
    } = useDisclosure();

    const {
      isOpen: isOpenRem,
      open: openRem,
      close: closeRem,
    } = useDisclosure();

    const { isOpen: isOpenPx, open: openPx, close: closePx } = useDisclosure();

    return (
      <Container>
        <Row justify="space-around">
          <Col md={2}>
            <Button onClick={openPercent}>50% Sidebar</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openRem}>50rem sidebar on Left</Button>
          </Col>
          <Col md={2}>
            <Button onClick={openPx}>700px sidebar</Button>
          </Col>
        </Row>
        <Sidebar
          title="Width: 50%"
          width="50%"
          isOpen={isOpenPercent}
          onClick={closePercent}
        >
          Sidebar Content
        </Sidebar>
        <Sidebar
          title="Width: 50rem"
          width="50rem"
          side="onLeft"
          isOpen={isOpenRem}
          onClick={closeRem}
        >
          Sidebar Content on Left
        </Sidebar>
        <Sidebar
          title="Width: 700px"
          width="700px"
          isOpen={isOpenPx}
          onClick={closePx}
        >
          Sidebar Content
        </Sidebar>
      </Container>
    );
  },

  name: "custom width",
  parameters: {
    docs: {
      story: {
        height: "450px",
      },
    },
  },
};
