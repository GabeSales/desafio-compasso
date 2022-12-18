import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SearchPage } from "../Pages/SearchUser/SearchPage"
import { ViewReposPage } from "../Pages/ViewRepos/ViewReposPage"

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<SearchPage/>}/>
            <Route path="/search/:userName/" element={<SearchPage/>}/>
            <Route path="/:userName/repository" element={<ViewReposPage/>}/>
            <Route path="/:userName/starred" element={<ViewReposPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}