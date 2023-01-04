import { Link } from "react-router-dom";
import * as S from "../../Pages/SearchUser/SearchUserStyled";
import { User } from "../../types/user";

type userProps = {
  user: User;
};

export const Card = ({ user }: userProps) => {
  return (
    <div>
      <S.CardDiv>
        <S.Img src={user.avatar_url} alt={user.name} />
        <p>{user.name}</p>
        {/* <p>{user.login}</p> */}
        <p>{user.bio}</p>
        <p>{user.location}</p>
        <p>Repositorios - {user.public_repos}</p>
        <p>Seguidores - {user.followers}</p>
        <p>Seguindo - {user.following}</p>
        <div>
          <Link to={`/${user.login}/repository/`}>
            <button>Repositorios</button>
          </Link>
          <Link to={`/${user.login}/starred/`}>
            <button>starred</button>
          </Link>
        </div>
      </S.CardDiv>
    </div>
  );
};
