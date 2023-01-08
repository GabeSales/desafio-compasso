import { Link } from "react-router-dom";
import * as S from "./Styled";
import { User } from "../../types/user";

type userProps = {
  user: User;
};

export const Card = ({ user }: userProps) => {
  return (
    <div>
      <S.CardDiv>
        <S.ContentDiv>
          <S.Img src={user.avatar_url} alt={user.name} />
        </S.ContentDiv>
        <S.ContentDiv>
          <h3>{user.name}</h3>
          <h4>{user.bio}</h4>
          <S.List>
            <li>{user.location}</li>
            <li>Repositorios - {user.public_repos}</li>
            <li>Seguidores - {user.followers}</li>
            <li>Seguindo - {user.following}</li>
          </S.List>
          <S.DivButton>
            <Link to={`/${user.login}/repository/`}>
              <S.Button>Repositorios</S.Button>
            </Link>
            <Link to={`/${user.login}/starred/`}>
              <S.Button>starred</S.Button>
            </Link>
          </S.DivButton>
        </S.ContentDiv>
      </S.CardDiv>
    </div>
  );
};
