import { BlockList } from "net";
import styled from "styled-components";

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

const Login = () => {
  return (
    <>
      <FlexContainer>
        <Container>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "1rem",
              fontFamily: "montserrat",
            }}
          >
            Login
          </h2>
          <Form>
            <label style={{ marginTop: "1rem" }}>Username</label>
            <Input type="text" placeholder="Enter Username" />
            <label style={{ marginTop: "1rem" }} placeholder="Username">
              Password
            </label>
            <Input type="text" placeholder=" Enter Password" />
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      </FlexContainer>
    </>
  );
};

export default Login;
