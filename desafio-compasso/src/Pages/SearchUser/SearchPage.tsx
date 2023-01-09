import { useState } from "react";
import { Search } from "../../Components/search/Search";
import { Card } from "../../Components/card/Card";
import { User } from "../../types/user";
import * as Styled from "./Styled";
import { searchUser } from "../../services/requests";

export const SearchPage = () => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <Styled.ContainerSearch>
            <Search searchUser={searchUser} setUser={setUser} />
            <Styled.Main>{user && <Card user={user} />}</Styled.Main>
        </Styled.ContainerSearch>
    );
};
