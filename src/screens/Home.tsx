import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import { styled } from "styled-components/native";

// custom components
import { colors } from "../utils/colors";
import { Container } from "../utils/shared";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.graylight} />
    </HomeContainer>
  );
};

export default Home;
