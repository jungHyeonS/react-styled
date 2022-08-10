
import styled from "styled-components"


//back tick 무조건 사용
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


//Box 에 있는 모든 스타일을 들고오고 지정된 속성을 추가한다(컴포넌트 확장)
const Circle = styled(Box)`
  border-radius: 50px;
`

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"/>
    </Father>
  );
}

export default App;
