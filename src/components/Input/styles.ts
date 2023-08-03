import styled from "styled-components";

type InputColor = {
  inputBgColor: string;
};

export const Input = styled.input<InputColor>`
  background: #${(props) => props.inputBgColor};
  width: 200px;
  border: none;
  outline: none;
  border-bottom: 3px solid #000;
  font-size: 18px;
  line-height: 0;
  text-align: center;
  color: #000;
`;
