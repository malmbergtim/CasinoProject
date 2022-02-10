import { BlockList } from "net";
import { useState } from "react";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import PrivacyPolicy from "../components/PrivacyPolicy";

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
  border: 1px solid black;
  margin: 1rem;
  padding: 2em;
  border-radius: 10px;
`;

const Form = styled.form`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  appearance: none;

  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  background: #ffc300;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: inherit
  font-size: 2rem;
  cursor: pointer;
  padding: 0.6em;
  border-radius: 10px;
 
`;

const CheckBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
const CheckBoxItem = styled.div``;

const Checkbox = styled.input``;

const Register = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={"Modal"}
        children={<PrivacyPolicy></PrivacyPolicy>}
      ></Modal>
      <FlexContainer>
        <Container>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              fontFamily: "montserrat",
            }}
          >
            Register
          </h2>
          <Form>
            <label style={{ marginTop: "1rem" }}>Username</label>
            <Input type="text" placeholder="Enter A Username" />
            <label style={{ marginTop: "1rem" }}>Password</label>
            <Input type="text" placeholder=" Enter A Password" />
            <label style={{ marginTop: "1rem" }}>Email</label>
            <Input type="text" placeholder=" Enter Email" />
            <label style={{ marginTop: "1rem" }}>First Name</label>
            <Input type="text" placeholder="Enter First Name" />
            <label style={{ marginTop: "1rem" }}>Last Name</label>
            <Input type="text" placeholder="Enter Last Name" />
            <Button type="submit">Login</Button>
            <CheckBoxContainer>
              <CheckBoxItem>
                <Checkbox type="checkbox"></Checkbox>
                <label htmlFor="">
                  {" "}
                  I confirm I am at least 18 years of age
                </label>
              </CheckBoxItem>
              <CheckBoxItem>
                <Checkbox type="checkbox"></Checkbox>
                <label htmlFor="">
                  {" "}
                  I confirm that i have read and understood the
                  <span style={{ fontWeight: "600" }}>
                    {" "}
                    <a onClick={toggleModal} href="#">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </CheckBoxItem>
            </CheckBoxContainer>
          </Form>
        </Container>
      </FlexContainer>
    </>
  );
};

export default Register;
