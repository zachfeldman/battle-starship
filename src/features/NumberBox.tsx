import * as React from "react";

export interface NumberBoxProps { cellValue: number; cellKey: number; }

export class NumberBox extends React.Component<NumberBoxProps, {}> {

    render() {
        return <td key={this.props.cellKey} className='numberBox'>{this.props.cellValue}</td>
    }
}