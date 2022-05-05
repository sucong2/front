import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;
<<<<<<< HEAD
//왜이러지
=======
// 왜 커밋이 안되는거지
>>>>>>> 0d75766067380acefbb314500c4d135034fdd4f2
const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;
<<<<<<< HEAD
//아디 비번 값 받기, 뭐지 왜 안되는거야

=======
//아디 비번 값 받기
>>>>>>> 0d75766067380acefbb314500c4d135034fdd4f2
//값없으면 disabled
function LoginForm() {
  return (
    <Container>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <Button>로그인</Button>
    </Container>
  );
}

export default LoginForm;