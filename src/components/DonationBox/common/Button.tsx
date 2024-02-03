import styled from "styled-components";

const Btn = styled.button<{ $btnLight?: boolean; $hideUnder?: number }>`
  cursor: pointer;
  padding: 16px 92px;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => (props.$btnLight ? "var(--grey-color)" : "#fff")};
  background-color: ${(props) =>
    props.$btnLight ? "#fff" : "var(--midnight-color)"};
  border-width: 1px;
  border-color: ${(props) =>
    props.$btnLight ? "var(--grey-color)" : "transparent"};
  border-radius: 5px;

  &:hover {
    background-color: ${(props) =>
      props.$btnLight
        ? "var(--light-light-purple-color)"
        : "var(--light-purple-color)"};
  }

  &:active {
    background-color: ${(props) =>
      props.$btnLight
        ? "var(--light-dark-purple-color)"
        : "var(--dark-purple-color)"};
  }
`;

interface ButtonProps {
  label: string;
  btnLight?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, btnLight }) => {
  return <Btn $btnLight={btnLight}>{label}</Btn>;
};

Button.defaultProps = {
  btnLight: false,
};

export default Button;
