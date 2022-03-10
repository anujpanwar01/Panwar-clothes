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
        {this.state.section.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}
export default Directory;
