import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {MainPage, ComicsPage} from '../pages/';
import SinglePage from '../pages/SinglePage'
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout'
import SingleComicLayout from '../pages/singleComicLayout/SingleComicLayout'
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import ('../pages/404'));

const App = () => {    

    return (
        <BrowserRouter>
            <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/comics" element={<ComicsPage/>} />     
                        <Route exact path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />
                        <Route exact path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                        <Route path="*" element={<Page404/>} />     
                    </Routes>
                </Suspense>
            </main>
        </div>
        </BrowserRouter>
    )
}

export default App;