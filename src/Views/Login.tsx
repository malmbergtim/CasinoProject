import { BlockList } from "net";
import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../context /UserContext";
import { Link, useNavigate } from "react-router-dom";
import casino from "./../images/CasinoPic.jpg";
const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;

  margin: 1rem;
  padding: 2em;
  border-radius: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 45%;
  height: 100vh;
  filter: blur(1px);
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
  color: #ffffcc;
 
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Login = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    const user = context?.user;

    const result = await fetch(
      `http://192.168.56.1:8080/api/user/login?email=${user!
        .email!}&password=${user!.password!}`,
      {
        method: "POST",
        body: JSON.stringify(user?.email),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    )
      .then((response) => {
        return response.json();
        if (response.ok) {
          console.log("login successful");
        } else console.log("something went wrong");
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user-info", JSON.stringify(data));
        navigate("/account");
        context?.setLoggedIn(true);
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
              Welcome back
            </h2>
            <p
              style={{
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              Dont have an account? <Link to="/register">Register</Link>
            </p>

            <Form onSubmit={handleSubmit}>
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

              <Button type="submit">Login</Button>
            </Form>
          </Container>
        </FormContainer>
      </FlexContainer>
    </>
  );
};

export default Login;
