import ErrorImage from "../../assets/404.jpeg";
import * as Styled from "../card/Styled";

export const UserNotFounded = () => {
    return (
        <Styled.CardDiv>
            <Styled.ContentDiv>
                <Styled.Img src={ErrorImage} alt="user not found" />
            </Styled.ContentDiv>
            <Styled.ContentDiv>
                <h3>Usuário não encontrado</h3>
                <h1>:C</h1>
            </Styled.ContentDiv>
        </Styled.CardDiv>
    );
};