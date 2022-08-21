import React from "react";

class ProfileStatus extends React.Component {


  state = {
    editMode: false,
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div className="user__box">
            <span className="user__box-status" onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div className="user__box">
            <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;