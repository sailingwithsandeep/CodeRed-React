import React from "react";
import "./Assets/css/TeamImageList.css";
import TeamMemberData from "./TeamMemberData";

class TeamImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
    this.state = {
      imageUrlArray: TeamMemberData,
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map(({ name, url }, index) => {
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img className="rounded" style={{borderRadius:"30px"}} ref={this.imageRef} src={url} alt={name} key={index}></img>
          <h4 className="text-center mt-1 mb-4">{name}</h4>
        </div>
      );
    });
    return <div className="image-list text-center">{images}</div>;
  }
}

export default TeamImageList;
