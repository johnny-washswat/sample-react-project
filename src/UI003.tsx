import React from "react";
import styled from "styled-components";

type Props = {
  id?: string;
  imageUrl?: string;
  borderRadius?: number;
};

const UI003: React.FC<Props> = ({ imageUrl, borderRadius }) => {
  return <StyledImage borderRadius={borderRadius} src={imageUrl} />;
};

export default UI003;

const StyledImage = styled.img<{ borderRadius?: number }>`
  height: 164px;
  border-radius: ${(props) => props.borderRadius || 10}px;
  overflow: hidden;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`;
