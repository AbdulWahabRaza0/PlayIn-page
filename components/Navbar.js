import styled from 'styled-components';
import { Image } from './Image';
import { Wrapper } from './Styles';
import { H1 } from './TypoGraphy';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavbarItems = styled.div`
  display: flex;
`;
const NavbarMenu = styled.div`
  display: flex;
  margin-left: 30px;
`;
export function Navbar() {
  return (
    <NavbarWrapper>
      <Image
        width={'142px'}
        height={'47px'}
        src='/assets/Subtract.png'
        alt='playin logo'
      />
      <NavbarItems>
        <NavbarMenu>
          <Image
            width={'41px'}
            height={'41px'}
            src='/assets/ether.png'
            alt='ethers'
          />
          <H1 style={{ marginLeft: '20px' }}>$4124.01</H1>
        </NavbarMenu>
        <NavbarMenu>
          <Image
            width={'41px'}
            height={'41px'}
            src='/assets/play.png'
            alt='ethers'
          />
          <H1 style={{ marginLeft: '20px' }}>$100</H1>
        </NavbarMenu>
        <NavbarMenu>
          <Image
            style={{ marginRight: '20px' }}
            height='36px'
            src='/assets/line.png'
            alt='line'
          />
          <Image
            width={'36px'}
            height='36px'
            src='/assets/profile.png'
            alt='profile-pic'
          />
        </NavbarMenu>
      </NavbarItems>
    </NavbarWrapper>
  );
}
