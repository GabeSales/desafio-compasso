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
          <p>{user.location}</p>
          <p>Repositorios - {user.public_repos}</p>
          <p>Seguidores - {user.followers}</p>
          <p>Seguindo - {user.following}</p>
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
