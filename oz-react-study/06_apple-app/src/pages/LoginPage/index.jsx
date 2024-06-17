import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const auth = getAuth();

  const signinSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;

    signInWithEmailAndPassword(auth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("userData", JSON.stringify(user));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        document.getElementById("pwd").value = "";
        switch (error.code) {
          case "auth/invalid-email":
            alert("이메일 양식으로 입력해주세요.");
            break;
          case "auth/invalid-credential":
            alert("이메일 혹은 비밀번호가 맞지 않습니다.");
            break;
        }
      });
  };

  return (
    <Container>
      <Center>
        <Logo src="/images/apple-gray-logo.svg" alt="로고" />
        <HeadingText>Apple tv 로그인</HeadingText>
        <Description>로그인 후 이용하실 수 있습니다.</Description>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요."
          id="email"
          required
          autocomplete="off"
        ></Input>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          id="pwd"
          required
        ></Input>
        <Button onClick={signinSubmit}>로그인</Button>
        <StyledLink to="/signup">회원가입</StyledLink>
      </Center>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  margin-bottom: 1.3rem;
  width: 50px;
`;
const HeadingText = styled.h1`
  font-size: 1.9rem;
`;
const LinkText = styled.p`
  font-size: 1.2rem;
  color: #2997ff;
  margin: 1rem 0;
`;
const StyledLink = styled(Link)`
  font-size: 0.9rem;
  color: #1d6cff;
  margin: 1rem 0;
  font-weight: 400;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;
const Input = styled.input`
  margin-bottom: 1.5rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, 0.04);
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  color: white;
  outline: none;
`;

const Button = styled.a`
  margin-top: 1.5rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 20px;
  border-color: #424245;
  background-color: #0c5ff8;
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0049d0;
  }
`;
export default LoginPage;
