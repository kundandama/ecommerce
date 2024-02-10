import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import "./Rating.scss";

// loop
// yellow if (rating >= index+1)
// 3 >= 1 Yellow true
// 3 >= 2 Yellow true
// 3 >= 3 Yellow true
// 3 >= 4 white false
// 3 >=5  white false

function Rating({ rating, maxRating, size }) {
  return (
    <div>
      {new Array(maxRating).fill(0).map(function (item, index) {
        const isActive = rating >= index + 1;
        let classN = isActive ? "rating__star--active" : "rating__star";
        return (
          <Icon className={classN} path={mdiStar} size={size} key={index} />
        );
      })}
    </div>
  );
}

export default Rating;
