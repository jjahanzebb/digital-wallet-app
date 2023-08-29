import React, { FunctionComponent } from "react";
import { styled } from "styled-components/native";
import {
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";

// custom components
import { colors } from "../../utils/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

const StyledViewButton = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
  return (
    <StyledViewButton onPress={props.onPress} style={props.imgContainerStyle}>
      <StyledImage style={props.imgStyle} source={props.img} />
    </StyledViewButton>
  );
};

export default Profile;
