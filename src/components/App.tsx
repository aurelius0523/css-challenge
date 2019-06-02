import * as React from "react";
import Challenge01 from "./challenges/Challenge01";
import Challenge02 from "./challenges/Challenge02";

const App: React.StatelessComponent = () => {
    return (
        <div className="app">
            <div className="content">
                <Challenge01 />
                <Challenge02 />
            </div>
        </div>
    );
};

export default App;
