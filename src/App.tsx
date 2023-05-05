import React from 'react';
import './App.css';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import LoadingList from "./playgrounds/LoadingList";
import LoadingListWhenNeeded from "./playgrounds/LoadingListWhenNeeded";

function Layout() {
    return (
        <div>
            <nav>
                <ul className={'flex justify-start items-center px-[20px] py-[10px] text-[16px] leading-[22px]'}>
                    <li className={'pr-[20px] text-[#1D4C2B] hover:text-[#4D3B1A]'}>
                        <Link to="/loadingList">List with loading</Link>
                        <Link to={"/loadingListWhenNeeded"}>Load List Only If You Need</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="loadingList" element={<LoadingList/>}/>
                    <Route path="loadingListWhenNeeded" element={<LoadingListWhenNeeded/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
