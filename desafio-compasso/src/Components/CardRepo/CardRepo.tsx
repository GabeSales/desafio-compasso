import * as S from "./Styled";
import { Repo } from "../../types/repo";

type repoProps = {
  repository: Repo;
};

export const CardRepo = ({ repository }: repoProps) => {
  const {
    name,
    descripition,
    language,
    watchers,
    stargazers_count,
    created_at,
    html_url,
  } = repository;

  return (
    <div>
      <S.CardContainer key={name}>
        <div>
          <h3>{name}</h3>
          <h4>{descripition}</h4>
          <p>{language}</p>
          <p>assistido - {watchers}</p>
          <p>estrela - {stargazers_count}</p>
          <p>{new Date(created_at).toLocaleDateString()}</p>
        </div>
        <div>
          <a href={html_url} target="_blank">
            <S.Button>Acessar Repositorio</S.Button>
          </a>
        </div>
      </S.CardContainer>
    </div>
  );
};
