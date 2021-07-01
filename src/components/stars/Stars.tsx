import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Stars({ votes }: any) {
  switch (votes) {
    case 0: return (
      <>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
    case 1 || 2: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
    case 3 || 4: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
    case 5 || 6: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
    case 7: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiOutlineStar />
      </>
    );
    case 8: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiOutlineStar />
      </>
    );
    case 9 || 10: return (
      <>
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
        <AiFillStar className="info__stars--golden" />
      </>
    );
    default: return <p>{votes}</p>;
  }
}
