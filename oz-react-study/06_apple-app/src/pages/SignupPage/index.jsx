import { styled } from "styled-components"
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"

const SignupPage = () => {

    const auth = getAuth();

    const navigate = useNavigate();

    const signupSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pwd = document.getElementById('pwd').value;
        console.log(email, pwd)
        createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
            // Signed in 
            alert('회원가입이 완료되었습니다.');
            signOut(auth);
            navigate('/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code)
            document.getElementById('pwd').value = '';
            switch (error.code) {
              case 'auth/invalid-email':
                alert('이메일 양식으로 입력해주세요.')
                break
              case 'auth/email-already-in-use':
                alert('등록된 이메일 입니다.')
                break
              default:
                alert('회원가입에 실패하였습니다.')
                break
            }
        });
    }


    return (
        <Container>
          <Center>
            <Logo src="/images/apple-gray-logo.svg" alt="로고" />
            <HeadingText>Apple tv 회원가입</HeadingText>
            <Description>회원가입 후 이용하실 수 있습니다.</Description>
            <Input type="email" placeholder="이메일을 입력해주세요." id="email" required autocomplete="off"></Input>
            <Input type="password" placeholder="비밀번호를 입력해주세요." id="pwd" required></Input>
            <Button onClick={signupSubmit}>회원가입</Button>
            <StyledLink to='/'>이메일 로그인</StyledLink>
          </Center>
        </Container>
      )
    }
    
    const Container = styled.section`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `
    
    const Center = styled.div`
      max-width: 650px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    const Logo = styled.img`
      margin-bottom: 1.3rem;
      width: 50px;
    `
    const HeadingText = styled.h1`
      font-size: 1.9rem;
    `
    const Description = styled.p`
      margin: 0;
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
    `
    const Input = styled.input`
        margin-bottom: 1.5rem;
        font-size: 18px;
        padding: 1rem;
        border: 1px solid transparent;
        border-radius: 12px;
        border-color: #424245;
        background-color: hsla(0, 0%, 100%,.04);
        width: 310px;
        font-weight: 400;
        cursor: pointer;
        color: white;
        outline: none;
    `
    
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
    `
    const StyledLink = styled(Link)`
    font-size: 0.9rem;
    color: #1d6cff;
    margin: 1rem 0;
    font-weight: 400;
`

export default SignupPage