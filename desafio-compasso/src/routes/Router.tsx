import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "../Pages/SearchUser/SearchPage";
import { ViewReposPage } from "../Pages/ViewRepos/ViewReposPage";
import { ViewStarredsPage } from "../Pages/ViewStarreds/ViewStarredsPage";

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
