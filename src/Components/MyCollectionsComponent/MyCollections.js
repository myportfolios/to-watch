import React, { Component } from "react";
import { connect } from "react-redux";
import { myCollectionsSelector } from "store/selectors/my-collections-selector";

// class MyCollections extends Component {
//   render() {
//     const { myCollections } = this.props;
//     console.log(myCollections);
//     let myCollectionsJSX = myCollections.map(movie => {
//       console.log(movie);
//       return <>{movie.poster_path}</>;
//     });
//     return <div>{myCollectionsJSX}</div>;
//   }
// }

class MyCollections extends Component {
  render() {
    console.log(this.props.myCollections);

    return <div>Hi</div>;
  }
}

const mapStateToProps = state => {
  return {
    myCollections: myCollectionsSelector(state)
  };
};

export default connect(
  mapStateToProps,
  {}
)(MyCollections);
