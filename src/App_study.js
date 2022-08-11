
import styled,{keyframes} from "styled-components"


/*back tick 무조건 사용
const Father = styled.div`
  display:flex;
`

const Box = styled.div`
  background-color:${props => props.bgColor};
  width:100px;
  height:100px;
`

const Text = styled.span`
  color:white;
`


Box 에 있는 모든 스타일을 들고오고 지정된 속성을 추가한다(컴포넌트 확장)
const Circle = styled(Box)`
  border-radius: 50px;
`

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

해당 컴포넌트에 속성을 지정
const Input = styled.input.attrs({require:true})`
  background-color: tomato;
`*/



/*<Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"/>

      <Btn>Login</Btn>

      as - 컴포넌트를 지정한 html 로 바꾼다
      <Btn as="a" href="/">Login</Btn>

      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
      <Input/>
     </Father>*/


const Wrapper = styled.div`
display: flex;
`;

const animation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
font-size: 36px;
`;


const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* span{
    &:hover{
      font-size: 98px;
    }
    &:active{
      opacity: 0;
    }
  } */
  ${Emoji}{
    &:hover{
      font-size: 98px;
    }
  }
`;   



function App() {
  return (
     <Wrapper>
        <Box>
          <Emoji as="p">happy</Emoji>
        </Box>
     </Wrapper>
  );
}

export default App;
