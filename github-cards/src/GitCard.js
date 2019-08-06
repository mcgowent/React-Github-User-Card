import React from 'react'

const GitCard = (props) => {
    return (
        <div>
            <p className="github_name">Github Card</p>
            <div className="card">
                <div className="card_top">
                    <img width="50%" src={props.data.avatar_url} alt={props.data.name} key={props.data.name} />
                    <h1>{props.data.name}</h1>
                    <p>{props.data.login}</p>
                </div>
                <div className="card_bottom">
                    <p>Repos: {props.data.public_repos}</p>
                    <p>Followers: {props.data.followers}</p>
                    <p>Following: {props.data.following}</p>
                </div>
            </div>
        </div>
    );
};

export default GitCard
