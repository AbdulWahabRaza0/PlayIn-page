import styled from 'styled-components';
import { Image } from './Image';
const ArrowImage = styled.div`
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
export function SideArrow() {
  return (
    <ArrowImage>
      <Image width={'62px'} height={'62px'} src='/assets/arrow.png' />
    </ArrowImage>
  );
}
