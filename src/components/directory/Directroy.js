import React from "react";
import MenuItem from "../menu-item/Menu-item";
import dircotory from "./directory.data";
import "./Directory.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: dircotory,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, id, imageUrl: image, size }) => {
          return <MenuItem key={id} image={image} title={title} size={size} />;
        })}
      </div>
    );
  }
}
export default Directory;
