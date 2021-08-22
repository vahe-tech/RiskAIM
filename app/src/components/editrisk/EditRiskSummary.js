import React from 'react';
import { riskValue, formatName } from '../../common/Functions';

export class EditRiskSummary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div class="tr">
                    <div class="td label">Risk #</div>
                    <div class="td">{this.props.risk.riskid} [<a href="" onClick="ctrl.getRiskReport()">Risk Summary</a>]</div>
                    <div class="td label">
                        Current Risk
                    </div>
                    <div class="td {this.props.risk.currentlevel}">
                        {riskValue(this.props.risk.currentlevel, this.props.risk.currentlikelihood, this.props.risk.currentconsequence)}
                    </div>
                </div>   
                <div class="tr">
                    <div class="td label">        
                        Creator
                    </div>
                    <div class="td">
                        Admin
                    </div>

                    <div class="td label">
                        Risk State
                    </div>
                    <div class="td">
                        {this.props.risk.riskstate}
                    </div>
                </div>            
                <div class="tr">
                    <div class="td label">
                        Owner
                    </div>
                    <div class="td">
                       {formatName(this.props.risk.ownerlastname, this.props.risk.ownerfirstname)}
                    </div>
                    <div class="td label">
                        Risk Approver
                    </div>
                    <div class="td">
                        {formatName(this.props.risk.approverlastname, this.props.risk.approverfirstname)}
                    </div>
                </div>
            </div>
        );
    }
}