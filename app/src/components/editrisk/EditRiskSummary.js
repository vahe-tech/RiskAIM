import React from 'react';
import { riskValue, formatName } from '../../common/Functions';

export class EditRiskSummary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="tr">
                    <div className="td label">Risk #</div>
                    <div className="td">{this.props.risk.riskid} [<a href="" onClick="ctrl.getRiskReport()">Risk Summary</a>]</div>
                    <div className="td label">
                        Current Risk
                    </div>
                    <div className="td {this.props.risk.currentlevel}">
                        {riskValue(this.props.risk.currentlevel, this.props.risk.currentlikelihood, this.props.risk.currentconsequence)}
                    </div>
                </div>   
                <div className="tr">
                    <div className="td label">        
                        Creator
                    </div>
                    <div className="td">
                        Admin
                    </div>

                    <div className="td label">
                        Risk State
                    </div>
                    <div className="td">
                        {this.props.risk.riskstate}
                    </div>
                </div>      
                <div className="tr">
                    <div className="td label">
                        Owner
                    </div>
                    <div className="td">
                       {formatName(this.props.risk.ownerlastname, this.props.risk.ownerfirstname)}
                    </div>
                    <div className="td label">
                        Risk Approver
                    </div>
                    <div className="td">
                        {formatName(this.props.risk.approverlastname, this.props.risk.approverfirstname)}
                    </div>
                </div>
            </div>
        );
    }
}