import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./SearchUserStyled";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  public_repos: string;
  followers: string;
  following: string;
}

export const SearchPage = () => {

   
  const [user, setUser] = useState({} as User) ;

  const searchUser = () => {
    const url = "https://api.github.com/users/gabesales";
    axios
      .get(url)
      .then((res) => {
        console.log("user", user);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("deu ruim", err.res);
      });
  };

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <S.ContainerSearch>
      <h1>Pesquisar Usuários do GitHub</h1>
      <h3>Digite um nome para encontrar usuários e repositórios</h3>
      <div>
        <S.SearchInput />
        <button>Search</button>

        <div>
          <S.Img src={user.avatar_url} />
          <p>{user.name}</p>
          <p>{user.bio}</p>
          <p>{user.location}</p>
          <p>Repositorios {user.public_repos}</p>
          <p>Seguidores {user.followers}</p>
          <p>Seguindo {user.following}</p>
        </div>
      </div>
    </S.ContainerSearch>
  );
};
