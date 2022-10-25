import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.padding ? props.padding : '11px 24px')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 48px;
  background: #262626;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export function InputBox({ children, width, padding }) {
  return (
    <InputWrapper padding={padding} width={width}>
      {children}
    </InputWrapper>
  );
}
