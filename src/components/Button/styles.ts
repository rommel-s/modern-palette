import styled from "styled-components";

type ButtonBg = {
  buttonColor?: string | never;
  activeBtn?: string | never;
};

export const MainButton = styled.button<ButtonBg>`
  border-radius: 3px;
  border: 3px solid #000;
  background: #${(props) => props.buttonColor};
  color: #000;
  box-shadow: 5px 5px 0px 0px #000;
  padding: 10px 20px;
  width: 250px;
  margin: 35px 0;

  &:active {
    translate: 5px 5px;
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

// export const HexButton = styled.button<ButtonBg>`
//   border-radius: 3px;
//   border: 3px solid #000;
//   box-shadow: 5px 5px 0px 0px #000;
//   padding: 10px 20px;
//   width: 100px;
//   background-color: #${(props) => props.buttonColor};

//   &:active {
//     translate: 5px 5px;
//     box-shadow: 0px 0px 0px 0px #000;
//   }
// `;

// export const RgbButton = styled.button<ButtonBg>`
//   border-radius: 3px;
//   border: 3px solid #000;
//   box-shadow: 5px 5px 0px 0px #000;
//   padding: 10px 20px;
//   width: 100px;
//   background-color: #${(props) => props.buttonColor};

//   &:active {
//     translate: 5px 5px;
//     box-shadow: 0px 0px 0px 0px #000;
//     background-color: red;
//   }
// `;

// export const HexButton = styled.button(
//   ({ buttonColor, activeBtn }: ButtonBg) =>
//     `
//   border-radius: 3px;
//   border: 3px solid #000;
//   box-shadow: 5px 5px 0px 0px #000;
//   padding: 10px 20px;
//   width: 100px;

//   ${
//     activeBtn === "hex"
//       ? `
//   background: #000;
//   color: #${buttonColor};
//   `
//       : `background: #${buttonColor};
//       color: #000;`
//   }
//   &:active {
//     translate: 5px 5px;
//     box-shadow: 0px 0px 0px 0px #000;
//   }
// `
// );

// export const RgbButton = styled.button(
//   ({ buttonColor, activeBtn }: ButtonBg) =>
//     `
//   border-radius: 3px;
//   border: 3px solid #000;
//   box-shadow: 5px 5px 0px 0px #000;
//   padding: 10px 20px;
//   width: 100px;

//   ${
//     activeBtn === "rgb"
//       ? `
//   background: #000;
//   color: #${buttonColor};
//   `
//       : `background: #${buttonColor};
//       color: #000;`
//   }

//   &:active {
//     translate: 5px 5px;
//     box-shadow: 0px 0px 0px 0px #000;
//   }
// `
// );

export const TabActiveButton = styled.button<ButtonBg>`
  border-radius: 3px;
  border: 3px solid #000;
  box-shadow: 5px 5px 0px 0px #000;
  padding: 10px 20px;
  width: 100px;
  background-color: #000;
  color: #${(props) => props.buttonColor};

  &:active {
    translate: 5px 5px;
    color: #ff0000;
    box-shadow: 0px 0px 0px 0px #000;
  }
`;

export const TabDefaultButton = styled.button<ButtonBg>`
  border-radius: 3px;
  border: 3px solid #000;
  box-shadow: 5px 5px 0px 0px #000;
  padding: 10px 20px;
  width: 100px;
  background-color: #${(props) => props.buttonColor};
  color: #000;

  &:active {
    translate: 5px 5px;
    box-shadow: 0px 0px 0px 0px #000;
  }
`;
