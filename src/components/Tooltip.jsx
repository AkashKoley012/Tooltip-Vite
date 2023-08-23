import styled from "styled-components";
import PropTypes from "prop-types";

const Tooltip = (props) => {
    return (
        <Container>
            <Message position={props.position}>Tooltip Message</Message>
            <Button>Press</Button>
        </Container>
    );
};

const Message = styled.span`
    position: absolute;
    background-color: black;
    padding: 10px;
    color: white;
    font-family: sans-serif;
    border-radius: 8px;
    visibility: hidden;
    ${(props) => props.position + (["left", "right"].includes(props.position) ? ":36%" : ":41%")};
    &::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: black;
        ${(props) => (["left", "right"].includes(props.position) ? "top: 1rem" : "left: 50%")};
        ${(props) => props.position + (["left", "right"].includes(props.position) ? (props.position === "right" ? ":94%" : ":100%") : ":2.1rem")};
        transform: translate(-50%) rotate(45deg);
    }
`;
const Button = styled.span`
    font-size: 1.5rem;
    font-family: sans-serif;
`;

const Container = styled.div`
    width: 15rem;
    height: 5rem;
    background-color: #e93155;
    display: flex;
    color: white;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
    &:hover ${Message} {
        visibility: visible;
    }
`;

Tooltip.propTypes = {
    position: PropTypes.string.isRequired,
};

export default Tooltip;
