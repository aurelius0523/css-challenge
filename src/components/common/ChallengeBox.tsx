import * as React from "react";

interface Props {
    title: string;
}

const ChallengeBox: React.StatelessComponent<Props> = (props: any) => {
    return (
        <div className="challenge-box-container">
            <div className="title">
                <span className="title-text">{props.title}</span>
            </div>
            {props.children}
        </div>
    );
};

export default ChallengeBox;
