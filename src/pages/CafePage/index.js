import React, { Component } from 'react';
import { connect } from 'react-redux';

class CafePage extends Component {
  state = {
    test: ''
  }

  render() {
    return (
      <div>
        CafePage
      </div>
    );
  }
}

const mapStateToProps = ({
  user
}) => ({
  user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CafePage);
