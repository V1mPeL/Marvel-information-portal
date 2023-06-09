import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import CharSearchForm from '../charSearchForm/charSearchForm';
import decoration from "../../resources/img/vision.png";

const MainPage = () => {

    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title> 
            </Helmet>
            <RandomChar />
            <div className="char__content">
                <ErrorBoundary>
                <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <div>
                    <CharInfo charId={selectedChar} />
                    <CharSearchForm/>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    );
};

export default MainPage;
