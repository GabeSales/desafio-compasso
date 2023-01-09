import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardRepo } from "../../Components/cardRepo/CardRepo";
import { Repo } from "../../types/repo";
import { Button } from "@mui/material";
import * as Styled from "./Styled";
import { goToPage } from "../../routes/Coordinator";

export const ViewReposPage = () => {
    const [repository, setRepository] = useState<Array<Repo> | null>(null);

    const { userName } = useParams();
    const navigate = useNavigate();

    const searchRepository = async (userName: string) => {
        const res = await fetch(
            `https://api.github.com/users/${userName}/repos`
        );
        const data = await res.json();

        setRepository(data);
    };

    if (!repository) {
        searchRepository(userName as string);
    }

    return (
        <Styled.Container>
            <Styled.Header>
                <h1>Repositorios</h1>
            </Styled.Header>
            <Styled.Main>
                {repository &&
                    repository?.map((item) => {
                        return <CardRepo key={item.id} repository={item} />;
                    })}
            </Styled.Main>
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
