import React from 'react';

export class EditRiskNavigationButtons extends React.Component {
    constructor(props){
        super(props); 
        this.requests = []
    }
    queueRequest = (request) => {
        this.requests.push(request);
    }
    processNextRequest = async () => {
        var nextRequest;
        if (this.requests.length) {
            nextRequest = this.requests.shift();
            return this.props.getRisk(nextRequest);
        }
        else
        {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(this.requests.length));
            });
        }
    }
    pollForRequests = async () => {
        while (true) {
            await this.processNextRequest();
        }
    }
    componentDidMount() {
       this.pollForRequests();
    }
    render() {
        return (
            <div>
                <input type="button" value="First" onClick={this.queueRequest.bind(this, 'first')} />
                <input type="button" value="Prev"  onClick={this.queueRequest.bind(this, 'prev')} />
                <input type="button" value="Next"  onClick={this.queueRequest.bind(this, 'next')} />
                <input type="button" value="Last"  onClick={this.queueRequest.bind(this, 'last')} />
            </div>
        );
    }
}