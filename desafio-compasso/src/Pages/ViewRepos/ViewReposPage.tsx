import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardRepo } from "../../Components/cardRepo/CardRepo";
import { Repo } from "../../types/repo";
import { Button } from "@mui/material";
import * as Styled from "./Styled";
import { goToPage } from "../../routes/Coordinator";
import { searchRepository } from "../../services/requests";

export const ViewReposPage = () => {
    const [repository, setRepository] = useState<Array<Repo> | null>(null);

    const { userName } = useParams();
    const navigate = useNavigate();

    if (!repository) {
        searchRepository(userName as string, setRepository);
    }

    return (
        <Styled.Container>
            <Styled.Header>
                <h1>Repositorios</h1>
            </Styled.Header>
            {repository?.length ? (
                <Styled.Main>
                    {repository &&
                        repository?.map((item) => {
                            return (
                                <CardRepo
                                    key={item.id}
                                    repository={item}
                                    setRepository={setRepository}
                                />
                            );
                        })}
                </Styled.Main>
            ) : (
                <h2>Esse usuário não possui nenhum repositorio</h2>
            )}
            <Styled.Footer>
                <Button
                    onClick={() => {
                        goToPage(navigate, "/");
                    }}
                    variant="contained"
                >
                    Home
                </Button>
            </Styled.Footer>
        </Styled.Container>
    );
};
