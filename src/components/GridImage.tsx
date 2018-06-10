import * as React from "react";

export class GridImage extends React.Component<{imageSrc: string, elementId: string}> {

    render() {
        return (
            <img src={this.props.imageSrc} className="gridImage" id={this.props.elementId}/>
        )
    }
}