import { BlockList } from "net";
import { useState } from "react";
import styled from "styled-components";
import { Modal } from "../components/Modal";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { useContext } from "react";
import { userContext } from "../context /UserContext";
import { Link, useNavigate } from "react-router-dom";
import { json } from "node:stream/consumers";
import axios from "axios";
import img from "../images/PlayForFun4.png";
import casino from "./../images/CasinoPic.jpg";

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 450px;
  margin: 1rem;
  padding: 2em;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Form = styled.form`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  color: #ffffcc;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  appearance: none;
  border-radius: 5px;
  padding: 0.5rem;
  background: #2f2f31;
  ::placeholder {
    color: #ffffcc;
  }
`;

const Button = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  background: #2f2f31;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: inherit
  font-size: 2rem;
  cursor: pointer;
  padding: 0.6em;
  border-radius: 10px;
  color: white;
 
`;

const CheckBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: cover;
  width: 45%;
  height: 100vh;
  filter: blur(1px);
`;
const CheckBoxItem = styled.div``;

const Checkbox = styled.input``;

const Register = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => setModalState(!isModalOpen);
  const context = useContext(userContext);
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setRegisterUser({
      ...context.user!,
      [e.target.name]: e.target.value,
    });
    console.log(context?.user);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    const user = context?.user;
    const result = await fetch("http://192.168.56.1:8080/api/user/addUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    navigate(`/login`);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={"Modal"}
        children={<PrivacyPolicy></PrivacyPolicy>}
      ></Modal>

      <FlexContainer>
        <Image src={casino} />
        <FormContainer>
          <Container>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "0.5rem",
                fontFamily: "montserrat",
              }}
            >
              Create Account
            </h2>
            <p style={{ textAlign: "center", textDecoration: "none" }}>
              Already have an account? <Link to="/login">Log In</Link>
            </p>

            <Form onSubmit={handleSubmit}>
              <label style={{ marginTop: "1rem" }}>First name</label>
              <Input
                type="text"
                placeholder="Enter First name"
                name="firstName"
                onChange={handleInput}
              />
              <label style={{ marginTop: "1rem" }}>Last name</label>
              <Input
                type="text"
                placeholder="Enter Lastname"
                name="lastName"
                onChange={handleInput}
              />

              <label style={{ marginTop: "1rem" }}>Email</label>
              <Input
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
              />
              <label style={{ marginTop: "1rem" }}>Password</label>
              <Input
                type="password"
                placeholder=" Enter A Password"
                name="password"
                onChange={handleInput}
              />
              <label style={{ marginTop: "1rem" }}>Age</label>
              <Input
                type="number"
                placeholder="Enter Age"
                name="age"
                onChange={handleInput}
              />

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
        </FormContainer>
      </FlexContainer>
    </>
  );
};

export default Register;
