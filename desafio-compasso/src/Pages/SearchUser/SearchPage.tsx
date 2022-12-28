import { useEffect, useState } from "react";
import { Search } from "../../Components/Search";
import { User } from "../../types/user";
import * as S from "./SearchUserStyled";

export const SearchPage = () => {
  const [user, setUser] = useState<User | null>(null);

  const searchUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    const {
      avatar_url,
      name,
      bio,
      location,
      public_repos,
      followers,
      following,
    } = data;

    const userData: User = {
      avatar_url,
      name,
      bio,
      location,
      public_repos,
      followers,
      following,
    };

    setUser(userData);
  };

  useEffect(() => {
    // searchUser();
  }, []);

  return (
    <S.ContainerSearch>
      <Search searchUser={searchUser} />
      <S.Main>
        {user && (
          <S.CardDiv>
            <S.Img src={user.avatar_url} />
            <p>{user.name}</p>
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <p>Repositorios {user.public_repos}</p>
            <p>Seguidores {user.followers}</p>
            <p>Seguindo {user.following}</p>
          </S.CardDiv>
        )}
      </S.Main>
    </S.ContainerSearch>
  );
};
