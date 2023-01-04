import { useState } from "react";
import { Search } from "../../Components/Search";
import { Card } from "../../Components/Card/Card";
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
      login,
    } = data;

    const userData: User = {
      avatar_url,
      name,
      bio,
      location,
      public_repos,
      followers,
      following,
      login,
    };

    setUser(userData);
  };

  return (
    <S.ContainerSearch>
      <Search searchUser={searchUser} />
      <S.Main>{user && <Card user={user} />}</S.Main>
    </S.ContainerSearch>
  );
};
