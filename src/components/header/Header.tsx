import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Box } from "../box";
import { Row, Col } from "../../index";
import theme from "../../theme";
import { NavWrapperProps } from "../navigation/Navigation";
import { Flex } from "../container";
import { IconProps } from "../icon";

export interface HeaderProps {
    logo?: IconProps;
    navigation?: NavWrapperProps;
    children?: string | number | any;
  }


  const Logo = styled.span`
    margin-right: ${theme.spacing.spacing07};
    color: ${theme.colors.primary};
  `;

  const MainContainer = styled(Flex)`
    flex-direction: row;
  `;

export const Header: FunctionComponent<HeaderProps> = ({
    logo,
    navigation,
    children
  }) => (
    <header>
        <Box padding="spacing04" shadow="shadow03">
            <>
                <Row>
                    <Col lg={8}>
                        <MainContainer>
                            <Logo>
                                {logo}
                            </Logo>

                            {navigation}
                        </MainContainer>
                    </Col>
                    <Col lg={4}>
                        {children}
                    </Col>
                </Row>
            </>
        </Box>
    </header>
  );