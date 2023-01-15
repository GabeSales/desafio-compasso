import React from "react";
import { Repo } from "../types/repo";
import { User } from "../types/user";

const { VITE_APP_BASE_URL, VITE_APP_GITHUB_TOKEN } = import.meta.env;

export const searchUser = async (
    userName: string,
) => {
    const res = await fetch(`${VITE_APP_BASE_URL}/${userName}`, {
        headers: {
            Authorization: `Bearer ${VITE_APP_GITHUB_TOKEN}`,
        },
    });
    const data: User = await res.json();

    return data
};

export const searchRepository = async (
    userName: string,
    setRepository: React.Dispatch<React.SetStateAction<Repo[] | null>>
) => {
    const res = await fetch(`${VITE_APP_BASE_URL}/${userName}/repos`, {
        headers: {
            Authorization: `Bearer ${VITE_APP_GITHUB_TOKEN}`,
        },
    });
    const data = await res.json();

    setRepository(data);
};

export const searchStarred = async (
    userName: string,
    setRepository: React.Dispatch<React.SetStateAction<Repo[] | null>>
) => {
    const res = await fetch(`${VITE_APP_BASE_URL}/${userName}/starred`, {
        headers: {
            Authorization: `Bearer ${VITE_APP_GITHUB_TOKEN}`,
        },
    });
    const data = await res.json();

    setRepository(data);
};
