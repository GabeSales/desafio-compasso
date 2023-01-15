import { useState } from "react";
import { Search } from "../../Components/search/Search";
import { Card } from "../../Components/card/Card";
import { User } from "../../types/user";
import * as Styled from "./Styled";
import { searchUser } from "../../services/requests";

export const SearchPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [userName, setUserName] = useState("");

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = await searchUser(userName);
        setUser(data);
    };

    return (
        <Styled.ContainerSearch>
            <Search
                onSubmitForm={onSubmitForm}
                setUserName={setUserName}
                userName={userName}
            />
            <Styled.Main>{user && <Card user={user} />}</Styled.Main>
        </Styled.ContainerSearch>
    );
};
