import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { KeyboardEvent, useState } from "react";
import { User } from '../../types/user';
import * as S from "./Styled";

type SearchProps = {
  searchUser: (userName: string, setUser: React.Dispatch<React.SetStateAction<User | null>>) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>
};

export const Search = ({ searchUser, setUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") searchUser(userName, setUser);
  };

  return (
    <S.Container>
      <S.Header>
      <h1>Pesquisar Usuários do GitHub</h1>
      <h3>Digite um nome para encontrar usuários e repositórios</h3>
      </S.Header>
      <S.DivSearch>
      <TextField
      fullWidth 
       id="outlined-basic"
        label="Pesquise um usuario" 
        variant="outlined" 
        type="text"
        // placeholder="Pesquise um usuario"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleEnter}
        />
      {/* <button onClick={() => searchUser(userName)}>Search</button> */}
      <Button 
      onClick={() => searchUser(userName, setUser)}
       variant="contained">Search</Button>
      </S.DivSearch>
    </S.Container>
  );
};
