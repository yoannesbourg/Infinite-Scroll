import React from 'react';
import { CardProps } from './CardProps';
import like from '../../img/like-default.png';
import likeActive from '../../img/like-liked.png';
import likeGray from '../../img/like-gray.png';
import repost from '../../img/repost.png';
import repostGray from '../../img/repost-gray.png';

import './Card.scss';

const Card = (props: CardProps): JSX.Element => {
    const { title, author, main_attachment, likes_count, liked, price } = props.image;
    const bigImage = main_attachment.big;
    const handleClick = () => {
        props.handleLike();
    };
    return (
        <div className="card" style={{ backgroundImage: `url(${bigImage})` }}>
            <div className="card__top">
                <div className="card__price">
                    {price}.00 <span> €</span>
                    <div className="card__priceBackground" />
                </div>
                <div className="card__top--hover">
                    <div className="card__likes" onClick={handleClick}>
                        {liked ? (
                            <img src={likeActive} style={{ width: '30px', height: '30px' }} />
                        ) : (
                            <img src={like} style={{ width: '30px', height: '30px' }} />
                        )}
                        <p className="card__likesCount">{likes_count}</p>
                    </div>
                    <div className="card__repost">
                        <img src={repost} style={{ width: '30px', height: '30px' }} />
                        <p className="card__repostCount">000</p>
                    </div>
                </div>
            </div>
            <div className="card__bottom">
                <h3 className="card__title">{title}</h3>
                <h3 className="card__author">
                    <span>by </span>
                    {author}
                </h3>
            </div>
            <div className="card__top--responsive">
                <div className="card__likes" onClick={handleClick}>
                    {liked ? (
                        <img src={likeActive} style={{ width: '30px', height: '30px' }} />
                    ) : (
                        <img src={likeGray} style={{ width: '30px', height: '30px' }} />
                    )}
                    <p className="card__likesCount">{likes_count}</p>
                </div>
                <div className="card__repost">
                    <img src={repostGray} style={{ width: '30px', height: '30px' }} />
                    <p className="card__repostCount">000</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
