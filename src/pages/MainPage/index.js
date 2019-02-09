import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {
  state = {
    test: ''
  }

  render() {
    return (
      <div>
        MAIN-PAGE
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
)(MainPage);
