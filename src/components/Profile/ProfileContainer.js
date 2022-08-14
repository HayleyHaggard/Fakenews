import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import Profile from './Profile';
// import { withRouter } from "react-router-dom";

// import { useParams } from 'react-router-dom';

import { setUserProfile } from "../../redux/profile-reducer"



import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}



// export function withRouter(Children) {
//   return (props) => {

//     const match = { params: useParams() };
//     return <Children {...props} match={match} />
//   }
// }

class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});


// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
