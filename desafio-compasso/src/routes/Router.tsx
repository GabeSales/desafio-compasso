import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "../Pages/searchUser/SearchPage";
import { ViewReposPage } from "../Pages/viewRepos/ViewReposPage";
import { ViewStarredsPage } from "../Pages/viewStarreds/ViewStarredsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SearchPage />} />
                <Route
                    path="/:userName/repository"
                    element={<ViewReposPage />}
                />
                <Route
                    path="/:userName/starred"
                    element={<ViewStarredsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};
