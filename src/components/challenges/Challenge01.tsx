import * as React from "react";
import ChallengeBox from "../common/ChallengeBox";

const Challenge01: React.StatelessComponent = () => {
    return (
        <ChallengeBox title={"Challenge 01"}>
            <div className="challenge-01-container">
                <div className="center">
                    <div className="number-wrapper">
                        <div className="one-one" />
                        <div className="one-two" />
                        <div className="zero-one" />
                        <div className="zero-two" />
                    </div>
                    <span className="word-mid">Days</span>
                    <span className="word-small">CSS Challenge</span>
                </div>
            </div>
        </ChallengeBox>
    );
};

export default Challenge01;
