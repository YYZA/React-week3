import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
class LikeButton extends React.Component {
  state = {
    isChecked: false,
    notice: " ",
  };

  onClick = () => {
    this.state.isChecked
      ? this.setState({
          isChecked: false,
        })
      : this.setState({
          isChecked: true,
        });
  };
  render() {
    return (
      <React.Fragment>
        <div className="icons-list">
          {this.state.isChecked ? (
            <HeartFilled
              style={{ color: "red", fontSize: "30px", marginTop: "20px" }}
              className="button red"
              onClick={(e) => {
                e.stopPropagation();
                e.stopPropagation();
                this.onClick();
              }}
            />
          ) : (
            <HeartOutlined
              style={{ fontSize: "30px", marginTop: "20px" }}
              className="button"
              onClick={(e) => {
                e.stopPropagation();
                e.stopPropagation();
                this.onClick();
              }}
            />
          )}
          <h3>{this.state.notice}</h3>
        </div>
      </React.Fragment>
    );
  }
}
export default LikeButton;
