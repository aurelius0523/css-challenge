import * as React from "react";
import ChallengeBox from "../common/ChallengeBox";

const Challenge02: React.StatelessComponent = () => {
    const boxes: any = [];

    for (let i = 0; i < 20; i++) {
        boxes.push(<div key={i} className={`square-${i}`} />);
    }

    return (
        <ChallengeBox title={"Challenge 02"}>
            <div className="challenge-02-container">{boxes}</div>
        </ChallengeBox>
    );
};

export default Challenge02;
