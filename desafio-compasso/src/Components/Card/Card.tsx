import { Link } from "react-router-dom";
import * as Styled from "./Styled";
import { User } from "../../types/user";
import { UserNotFounded } from "../UserNotFounded/UserNotFounded";

type userProps = {
    user: User;
};

export const Card = ({ user }: userProps) => {
    if (!user.login) return <UserNotFounded />;
    return (
        <div>
            <Styled.CardDiv>
                <Styled.ContentDiv>
                    <Styled.Img src={user.avatar_url} alt={user.name} />
                </Styled.ContentDiv>
                <Styled.ContentDiv>
                    <h3>{user.name}</h3>
                    <h4>{user.bio}</h4>
                    <Styled.List>
                        <li>{user.location}</li>
                        <li>Repositorios - {user.public_repos}</li>
                        <li>Seguidores - {user.followers}</li>
                        <li>Seguindo - {user.following}</li>
                    </Styled.List>
                    <Styled.DivButton>
                        <Link to={`/${user.login}/repository/`}>
                            <Styled.Button>Repositorios</Styled.Button>
                        </Link>
                        <Link to={`/${user.login}/starred/`}>
                            <Styled.Button>starred</Styled.Button>
                        </Link>
                    </Styled.DivButton>
                </Styled.ContentDiv>
            </Styled.CardDiv>
        </div>
    );
};
