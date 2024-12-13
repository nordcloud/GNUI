import * as React from "react";
import { When } from "react-if";
import { Button } from "../button";
import { FlexContainer } from "../container";
import { Background } from "../modal/styles";
import { SVGIcon } from "../svgicon";
import {
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
    <SidebarCloseButton severity="low" title="Close sidebar" onClick={onClick}>
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
  headerStyles,
  contentStyles,
  onClick = () => undefined,
  showExpandButton = false,
  onExpandClick = () => undefined,
  ...props
}: SidebarProps) {
  React.useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
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
      <Background isVisible={isOpen} zIndex="overlay" onClick={onClick} />
      <SidebarMenu isOpen={isOpen} side={side} reverse={side === "onLeft"}>
        <Inner isOpen={isOpen} {...props}>
          {isOpen && (
            <>
              <Header reverse={side === "onLeft"} style={headerStyles}>
                <header>
                  <Title
                    tag="span"
                    ml={side === "onLeft" ? ["1rem", "1rem"] : [0]}
                  >
                    {title}
                  </Title>
                  {caption && <Caption>{caption}</Caption>}
                </header>
                <FlexContainer justifyContent="space-evenly">
                  <When condition={showExpandButton}>
                    <Button
                      severity="low"
                      size="md"
                      icon="externalLink"
                      title="Expand"
                      type="button"
                      marginRight={1}
                      onClick={onExpandClick}
                    />
                  </When>
                  <Button
                    severity="low"
                    size="md"
                    icon="close"
                    title="Close sidebar"
                    type="button"
                    onClick={onClick}
                  />
                </FlexContainer>
              </Header>
              <Container style={contentStyles}>
                <Content tag="div">{children}</Content>
              </Container>
              {footer && <FooterSidebar>{footer}</FooterSidebar>}
            </>
          )}
        </Inner>
        {isOpen && <CloseLayer isOpen={isOpen} onClick={onClick} {...props} />}
      </SidebarMenu>
    </>
  );
}
