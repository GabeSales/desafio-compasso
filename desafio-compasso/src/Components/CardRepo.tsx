import * as S from "../Pages/ViewRepos/Styled";
import { Repo } from "../types/repo";

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
          <p>{name}</p>
          <p>{descripition}</p>
          <p>{language}</p>
          <p>assistido - {watchers}</p>
          <p>estrela - {stargazers_count}</p>
          <p>{new Date(created_at).toLocaleDateString()}</p>
        </div>
        <div>
          <a href={html_url} target="_blank">
            <button>Acessar Repositorio</button>
          </a>
        </div>
      </S.CardContainer>
    </div>
  );
};
