import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CardRepo } from "../../Components/CardRepo/CardRepo";
import { Repo } from "../../types/repo";
import * as S from "../ViewRepos/Styled";
import { Button } from "@mui/material";

export const ViewStarredsPage = () => {
  const [repository, setRepository] = useState<Array<Repo> | null>(null);

  const { userName } = useParams();

  const searchRepository = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}/starred`);
    const data = await res.json();

    setRepository(data);
  };

  useEffect(() => {
    searchRepository(userName as string);
  }, []);

  if (!repository) {
    searchRepository(userName as string);
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Starreds</h1>
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
