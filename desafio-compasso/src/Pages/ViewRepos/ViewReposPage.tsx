import { useState } from "react";
import { useParams } from "react-router-dom";
import { CardRepo } from "../../Components/CardRepo/CardRepo";
import { Repo } from "../../types/repo";
import { Button } from "@mui/material";
import * as S from "./Styled";
import { Link } from "react-router-dom";

export const ViewReposPage = () => {
  const [repository, setRepository] = useState<Array<Repo> | null>(null);

  const { userName } = useParams();

  const searchRepository = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await res.json();

    setRepository(data);
  };

  if (!repository) {
    searchRepository(userName as string);
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Repositorios</h1>
      </S.Header>
      <S.Main>
        {repository &&
          repository?.map((item) => {
            return <CardRepo key={item.id} repository={item} />;
          })}
      </S.Main>
      <S.Header>
        <Link to={"/"}>
          <Button variant="contained">Home</Button>
        </Link>
      </S.Header>
    </S.Container>
  );
};
