import * as React from "react";

export interface LetterBoxProps { cellLetter: string, cellKey: number; }

export class LetterBox extends React.Component<LetterBoxProps, {}> {

    render() {
        return <td key={this.props.cellKey} className='letterBox'>{this.props.cellLetter}</td>
    }
}