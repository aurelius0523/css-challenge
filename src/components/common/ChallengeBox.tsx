import * as React from "react";

interface Props {
    title: string;
}

const ChallengeBox: React.StatelessComponent<Props> = (props: any) => {
    return (
        <div className="challenge-box-container">
            <p className="title">{props.title}</p>
            {props.children}
        </div>
    );
};

export default ChallengeBox;
