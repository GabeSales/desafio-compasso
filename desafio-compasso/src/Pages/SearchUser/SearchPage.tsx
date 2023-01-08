import { useState } from "react";
import { Search } from "../../Components/search/Search";
import { Card } from "../../Components/card/Card";
import { User } from "../../types/user";
import * as S from "./Styled";
import { searchUser } from "../../services/requests";

export const SearchPage = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <S.ContainerSearch>
      <Search searchUser={searchUser} setUser={setUser} />
      <S.Main>{user && <Card user={user} />}</S.Main>
    </S.ContainerSearch>
  );
};
