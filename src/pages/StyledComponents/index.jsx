import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 40px;
  border: 5px dashed black;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  color: green;
`;

export default function StyledComponents() {
  return (
    <Box>
      <Content> Styling React Components </Content>
    </Box>
  );
}
