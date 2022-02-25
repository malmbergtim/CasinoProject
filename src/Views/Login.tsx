import { BlockList } from "net";
import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../context /UserContext";
import { useNavigate } from "react-router-dom";
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
  const context = useContext(userContext);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    const user = context?.user;

    const result = await fetch(
      `https://leovegasapi.lm.r.appspot.com/api/user/login?email=${user!
        .email!}&password=${user!.password!}`,
      {
        method: "POST",
        body: JSON.stringify(user?.email),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json();
        console.log(response);
        navigate("/account");
      } else console.log("something went wrong");
    });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setRegisterUser({
      ...context.user!,
      [e.target.name]: e.target.value,
    });
    console.log(context?.user);
  };
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
          <Form onSubmit={handleSubmit}>
            <label style={{ marginTop: "1rem" }}>Email</label>
            <Input
              type="text"
              placeholder=" Enter Email"
              name="email"
              onChange={handleInput}
            />
            <label style={{ marginTop: "1rem" }} placeholder="Password">
              Password
            </label>
            <Input
              placeholder=" Enter Password"
              onChange={handleInput}
              type="password"
              name="password"
            />
            <Button type="submit">Login</Button>
          </Form>
        </Container>
      </FlexContainer>
    </>
  );
};

export default Login;
