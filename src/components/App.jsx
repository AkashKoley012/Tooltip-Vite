import styled from "styled-components";
import Tooltip from "./Tooltip";

const App = () => {
    return (
        <Container>
            <Tooltip position="bottom" />
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default App;
