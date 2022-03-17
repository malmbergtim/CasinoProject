import react, { ComponentType, ReactNode } from "react";
import styled from "styled-components";
import PrivacyPolicy from "./PrivacyPolicy";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-top: 1rem;
`;

const ModalContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1.5em;
  border-radius: 5px;
  z-index: 100;
  width: 100%;
  height: 550px;
  position: absolute;
  background: #ffffcc;
  top: 50%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: white;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d3d3d3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  right: 20px;
  top: 10px;
`;

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { title, isOpen, onClose, children } = props;

  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={onClose}>
              <i className="fa fa-close" style={{ fontSize: "1.2rem" }}></i>
            </CloseButton>
            {children}
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};
