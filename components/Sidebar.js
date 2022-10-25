import styled from "styled-components";
import { Wrapper } from "./Styles";
import { H1 } from "./TypoGraphy";
const data = [
  {
    text: "Bets",
  },
  { text: "  Search" },
  {
    text: "Leaders",
  },
  {
    text: "Exchange",
  },
  {
    text: "Markting",
  },
];
const HeaderText = styled.div`
  margin-bottom: 45px;
`;

export function Sidebar() {
  return (
    <Wrapper>
      {data.map((item, index) => {
        return (
          <HeaderText key={index}>
            <H1 sidebar color="rgba(255, 255, 255, 0.8);">
              {item.text}
            </H1>
          </HeaderText>
        );
      })}
    </Wrapper>
  );
}
