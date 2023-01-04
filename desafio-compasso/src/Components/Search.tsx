import { KeyboardEvent, useState } from "react";
import * as S from "../Pages/SearchUser/SearchUserStyled";

type SearchProps = {
  searchUser: (userName: string) => Promise<void>;
};

export const Search = ({ searchUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") searchUser(userName);
  };

  return (
    <div>
      <h1>Pesquisar Usuários do GitHub</h1>
      <h3>Digite um nome para encontrar usuários e repositórios</h3>
      <S.SearchInput
        type="text"
        placeholder="Pesquise um usuario"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={() => searchUser(userName)}>Search</button>
    </div>
  );
};
