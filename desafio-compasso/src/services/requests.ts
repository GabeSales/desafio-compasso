import React from "react";
import { Repo } from "../types/repo";
import { User } from "../types/user";

export const searchUser = async (
    userName: string,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    console.log(data);

    const {
        avatar_url,
        name,
        bio,
        location,
        public_repos,
        followers,
        following,
        login,
    } = data;

    const userData: User = {
        avatar_url,
        name,
        bio,
        location,
        public_repos,
        followers,
        following,
        login,
    };

    setUser(userData);
};

export const searchRepository = async (
    userName: string,
    setRepository: React.Dispatch<React.SetStateAction<Repo[] | null>>
) => {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await res.json();

    setRepository(data);
};

export const searchStarred = async (
    userName: string,
    setRepository: React.Dispatch<React.SetStateAction<Repo[] | null>>
) => {
    const res = await fetch(`https://api.github.com/users/${userName}/starred`);
    const data = await res.json();

    setRepository(data);
};
