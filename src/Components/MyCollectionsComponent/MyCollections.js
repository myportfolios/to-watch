import React, { Component } from "react";
import { connect } from "react-redux";
import { myCollectionsSelector } from "store/selectors/my-collections-selector";

class MyCollections extends Component {
  render() {
    return <div>Hi</div>;
  }
}

const mapStateToProps = state => {
  return {
    myCollections: myCollectionsSelector(state)
  };
};

export default connect(mapStateToProps, {})(MyCollections);
