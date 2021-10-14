import "./FindMe.css";

interface FindMeProps {
    onClick: () => void;
}

export const FindMe = (props: FindMeProps) => {
    return (
        <div className="find-me">
            <button className="find-me__button" onClick={props.onClick}>Find me</button>
        </div>
    )
}