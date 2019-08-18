import React from 'react'

const FriendsList = (props) => {
    return (
        <a href={props.data.html_url}>
            <div className="card_friends">
                <div className="card_top">
                    <img width="40%" src={props.data.avatar_url} alt={props.data.name} key={props.data.name} />
                    <p>{props.data.login}</p>
                </div>

            </div>
        </a>
    );
};

export default FriendsList