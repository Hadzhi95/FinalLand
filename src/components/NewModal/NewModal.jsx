import Modal from "@mui/material/Modal";
import styled from "styled-components";


export const NewModal = ({ open, onClose, content, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        // eslint-disable-next-line react/no-children-prop
        children={
          <Wrapper>
            {content}
          </Wrapper>
        }
      />
      {children}
    </>
  );
};
const Img = styled.img`
  position: absolute;
  top: 4%;
  right: 3%;
  width: 15px;
  cursor: pointer;
`;

const Wrapper = styled.div`
 animation: slide 0.5s forwards;
  position: absolute;
  // background: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @keyframes slide {
    0% {
      left: 0; /* конечное положение окна в центре экрана */
    }
  }
`;