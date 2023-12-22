/* eslint-disable react/prop-types */

import "./BlogCard.css"
export const BlogCard = (props) => {
    return (
        <div className="Card">
            <span className="Date">23 <p>Jan</p></span>
            <div className="Card-img"><img src={props.image} width={350}/></div>
            <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      );
}
