import { NavigateFunction } from "react-router";

export const goToPage = (navigate: NavigateFunction, path: string) => {
    navigate(path);
};
