import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

export const FlexColumnCenterMargin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
`;

export const Header = styled(FlexColumnCenterMargin)``;
export const Footer = styled(FlexColumnCenterMargin)``;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    gap: 0.5rem;
`;
