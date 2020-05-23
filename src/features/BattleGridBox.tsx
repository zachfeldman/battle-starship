import * as React from "react";

export interface BattleGridBoxProps { cellValue: number; cellKey: number; }

export class BattleGridBox extends React.Component<BattleGridBoxProps, {}> {

    render() {
        return <td key={this.props.cellKey} className='battleGridBox'>{/*this.props.cellValue*/}</td>
    }
}