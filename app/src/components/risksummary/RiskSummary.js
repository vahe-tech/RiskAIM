import React from 'react';
import { render } from 'react-dom';
import { formatDateMDY } from '../../common/Functions';
import './RiskSummary.css';


class RiskSummary extends React.Component {
  constructor(props) {
    super(props)
    this.formatDateMDY = formatDateMDY.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      message: ''
    };
  }

  componentDidMount() {
    fetch("http://riskaim/api/risks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
            message: result.message
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
         return <div className="wrapper">
            <div className="table">
              <div className="row header blue">
                <div className="cell"><span>Edit</span></div>     
                <div className="cell"><span>View</span></div>  
                <div className="cell"><span>Status</span></div>
                <div className="cell"><span>Title</span></div>                                           
                <div className="cell"><span>Original Level</span></div> 
                <div className="cell"><span>Latest Level</span></div>   
                <div className="cell"><span>Original Value</span></div>   
                <div className="cell"><span>Latest Value</span></div>  
                <div className="cell"><span>Original Date</span></div>  
                <div className="cell"><span>Latest Date</span></div>   
                <div className="cell"><span>Creator</span></div>    
                <div className="cell"><span>Owner</span></div>    
                <div className="cell"><span>Approver</span></div>    
              </div>
            {items.map(risk => {
              this.thresholdStyle = (which) => {
                return {width: risk[which+'value']+"%"}
              }; 
               return <div className="row">
                  <div className="cell" data-title="Edit"><a href={risk.id}>Edit</a></div>
                  <div className="cell" data-title="View"><a href={risk.riskid}>{risk.riskid}</a></div>
                  <div className="cell" data-title="Status">{risk.riskstate}</div>
                  <div className="cell" data-title="Title">{risk.risktitle}</div>
                  <div className="cell" data-title="OriginalLevel"><div>{risk.originallevel} {risk.originallikelihood}-{risk.originalconsequence}</div></div>
                  <div className="cell" data-title="LatestLevel"><div>{risk.currentlevel} {risk.currentlikelihood}-{risk.currentconsequence}</div></div>
                  <div className="cell" data-title="OriginalValue"><div className={risk.originallevel} style={this.thresholdStyle('original')}>&nbsp;</div></div>
                  <div className="cell" data-title="LatestValue"><div className={risk.currentlevel} style={this.thresholdStyle('current')}>&nbsp;</div></div>
                  <div className="cell" data-title="OriginalDate">{this.formatDateMDY(risk.assessmentdate)}</div>
                  <div className="cell" data-title="LatestDate">{this.formatDateMDY(risk.latesteventdate)}</div>
                  <div className="cell" data-title="Creator">{risk.assignor}</div>
                  <div className="cell" data-title="Owner">{risk.owner}</div>
                  <div className="cell" data-title="Approver">{risk.approver}</div>
                </div>;
              })}
          </div>
        </div>;
    }
  }
}
render(<RiskSummary/>, document.getElementById("root"))