import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardRepo } from "../../Components/cardRepo/CardRepo";
import { Repo } from "../../types/repo";
import * as Styled from "../viewRepos/Styled";
import { Button } from "@mui/material";
import { goToPage } from "../../routes/Coordinator";
import { searchStarred } from "../../services/requests";

export const ViewStarredsPage = () => {
    const [repository, setRepository] = useState<Array<Repo> | null>(null);

    const { userName } = useParams();
    const navigate = useNavigate();

    if (!repository) {
        searchStarred(userName as string, setRepository);
    }

    return (
        <Styled.Container>
            <Styled.Header>
                <h1>Starreds</h1>
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
                <h2>Esse usuário não possui nenhum repositorio com estrela</h2>
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
