import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-jss';
import { formatDateMDY } from '../../common/Functions';
import { EditRiskNavigationButtons, EditRiskSummary } from './SubComponents';
//import './EditRisk.jss';

class EditRisk extends React.Component {
  constructor(props) {
    super(props)
    this.formatDateMDY = formatDateMDY.bind(this);
    this.getRisk = this.getRisk.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      risk: {},
      riskid: 0,
      riskAPIUriParams: '',
      message: ''
    };
  }
  getRisk = (gotoRisk = 'first') => {
    this.state.riskAPIUriParams = (this.state.riskid || "") + "/" + gotoRisk
    if (this.state.riskid != 0)
      this.state.riskAPIUriParams = "/" + this.state.riskAPIUriParams;
    return fetch("http://riskaim/api/risks"+this.state.riskAPIUriParams)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          risk: result.data,
          riskid: result.data.riskid,
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
  componentDidMount() {
    if (!this.state.isLoaded)
      this.getRisk('first');
  }
  handleSubmit(event){
    
  }
  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
         return (
          <div id="formcontainer">
            <div id="myeditform">   
              <form id="form" name="EditRisk" ng-submit="">
                <div class="layout"></div>
                  <EditRiskNavigationButtons getRisk={this.getRisk} />
                  <EditRiskSummary risk={this.state.risk} />
                  <pre>{JSON.stringify(this.state.risk)}</pre>
              </form>
            </div>
          </div>
        );
    }
  }
}
render(<EditRisk/>, document.getElementById("root"))
/*
<EditRiskSummary />
<EditRiskDetails />
<EditRiskSubmitButtons />
<EditRiskNavigationButtons />
<EditRiskMitigationEvents />
*/