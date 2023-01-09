import * as Styled from "./Styled";
import { Repo } from "../../types/repo";

type repoProps = {
    repository: Repo,
    setRepository:React.Dispatch<React.SetStateAction<Repo[] | null>>
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
            <Styled.CardContainer key={name}>
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
                        <Styled.Button>Acessar Repositorio</Styled.Button>
                    </a>
                </div>
            </Styled.CardContainer>
        </div>
    );
};
