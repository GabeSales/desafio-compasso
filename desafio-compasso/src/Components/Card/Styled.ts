import styled from "styled-components";

export const CardDiv = styled.div`
    border: 1px solid;
    border-radius: 1rem;
    width: 16rem;
    min-height: 24rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    background-color: #4f82f1;
    border: none;
    padding-bottom: 0.8rem;
`;

export const Img = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 5rem;
    margin: 0 auto;
`;

export const ContentDiv = styled.div`
    margin-top: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
export const DivButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
    gap: 0.5rem;
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const Button = styled.button`
    width: 6.5rem;
    height: 1.8rem;
    border-radius: 0.6rem;
    border: none;
    font-size: 0.85rem;
`;
