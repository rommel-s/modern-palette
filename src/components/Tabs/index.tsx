import { useState } from "react";

import { MainButton, HexButton, RgbButton } from "../Button/styles";
import { Input } from "../Input/styles";
import * as C from "./styles";

type TabsProps = {
  getActiveTab: (tab: string) => void;
  hexColor: (hexColor: string) => void;
  rgbColor: (rgbColor: string) => void;
  currentColor: string;
};

const Tabs = ({
  getActiveTab,
  hexColor,
  rgbColor,
  currentColor
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>("hex");
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  //const [isActive, setIsActive] = useState(false);

  const hexColorInput = () => {
    console.log(hex);
    hexColor(hex);
  };

  const rgbColorInput = () => {
    console.log(rgb);
    rgbColor(rgb);
  };

  const handleTabHex = () => {
    setActiveTab("hex");
    //setIsActive(true);
    getActiveTab("hex");
  };

  const handleTabRGB = () => {
    setActiveTab("rgb");
    //setIsActive(true);
    getActiveTab("rgb");
  };

  return (
    <>
      <C.TabsButtonsContainer>
        <HexButton
          onClick={handleTabHex}
          buttonColor={currentColor}
          activeBtn={activeTab}
        >
          Hex
        </HexButton>
        <RgbButton
          onClick={handleTabRGB}
          buttonColor={currentColor}
          activeBtn={activeTab}
        >
          RGB
        </RgbButton>
      </C.TabsButtonsContainer>
      {activeTab === "hex" ? (
        <>
          <C.InputTabs>
            <C.InputContainer>
              <label for="hexainput">#</label>
              <Input
                type="text"
                id="hexainput"
                onChange={(e) => setHex(e.target.value)}
                inputBgColor={currentColor}
                // autoFocus
              ></Input>
            </C.InputContainer>
            <MainButton onClick={hexColorInput} buttonColor={currentColor}>
              Procurar cor
            </MainButton>
          </C.InputTabs>
        </>
      ) : (
        <>
          <C.InputTabs>
            <C.InputContainer>
              <label for="rgbinput">rgb</label>
              <Input
                type="text"
                id="rgbinput"
                placeholder="RRR,GGG,BBB"
                onChange={(e) => setRgb(e.target.value)}
                inputBgColor={currentColor}
                //autoFocus
              ></Input>
            </C.InputContainer>
            <MainButton onClick={rgbColorInput} buttonColor={currentColor}>
              Procurar cor
            </MainButton>
          </C.InputTabs>
        </>
      )}
    </>
  );
};

export default Tabs;
