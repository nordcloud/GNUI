import * as React from "react";
import { Button } from "../button";
import { SVGIcon } from "../svgicon";
import {
  Background,
  Caption,
  CloseLayer,
  Container,
  Content,
  FooterSidebar,
  Header,
  Inner,
  SidebarCloseButton,
  SidebarMenu,
  Title,
} from "./styles";
import { SidebarProps, SidebarButtonProps } from "./types";

export function CloseButton({ onClick, icon, children }: SidebarButtonProps) {
  return (
    <SidebarCloseButton
      severity="low"
      onClick={onClick}
      title={"Close sidebar"}
    >
      {children ? children : <SVGIcon name={icon || "close"} />}
    </SidebarCloseButton>
  );
}

export function Sidebar({
  children,
  title,
  caption,
  side,
  isOpen,
  footer,
  padding,
  onClick = () => undefined,
  ...props
}: SidebarProps) {
  React.useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClick();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClick]);

  return (
    <>
      <Background onClick={onClick} isOpen={isOpen} />
      <SidebarMenu isOpen={isOpen} side={side} reverse={side === "onLeft"}>
        <Inner isOpen={isOpen} {...props}>
          {isOpen && (
            <>
              <Header reverse={side === "onLeft"} padding={padding}>
                <header>
                  <Title
                    tag="span"
                    ml={side === "onLeft" ? ["1rem", "1rem"] : [0]}
                  >
                    {title}
                  </Title>
                  {caption && <Caption>{caption}</Caption>}
                </header>
                <Button
                  severity="low"
                  size="md"
                  icon="close"
                  onClick={onClick}
                  title="Close sidebar"
                  type="button"
                />
              </Header>
              <Container padding={padding}>
                <Content tag="div">{children}</Content>
              </Container>
              {footer && <FooterSidebar>{footer}</FooterSidebar>}
            </>
          )}
        </Inner>
        {isOpen && <CloseLayer onClick={onClick} isOpen={isOpen} {...props} />}
      </SidebarMenu>
    </>
  );
}
