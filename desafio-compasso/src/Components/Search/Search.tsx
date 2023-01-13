import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as Styled from "./Styled";

type SearchProps = {
    userName: string;
    onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ onSubmitForm, setUserName }: SearchProps) => {
    return (
        <Styled.Container>
            <Styled.Header>
                <h1>Pesquisar Usuários do GitHub</h1>
                <h3>Digite um nome para encontrar usuários e repositórios</h3>
            </Styled.Header>
            <Styled.Form onSubmit={onSubmitForm}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Pesquise um usuário"
                    variant="outlined"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <Button type={"submit"} variant="contained">
                    Search
                </Button>
            </Styled.Form>
        </Styled.Container>
    );
};
