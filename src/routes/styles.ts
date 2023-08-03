import styled from "styled-components";

type BgColor = {
  mainBackgroundColor: string;
  inputActive: string;
  userColorInput: string;
  rgbInput: string;
};

export const MainContainer = styled.div<BgColor>`
  width: 100vw;
  height: 100vh;
  background: #${(props) => props.mainBackgroundColor};
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
