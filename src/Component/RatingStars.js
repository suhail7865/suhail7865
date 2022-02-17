
import React, {Component} from 'react';

import StarRating from 'react-native-star-rating';

class RatingStar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            starCount: 2.5
        };
    }
    
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    
    render({icon}) {
    
        return (
            <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={icon}
        maxStars={7}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'red'}
      />
    );
  }
}

export default RatingStar;