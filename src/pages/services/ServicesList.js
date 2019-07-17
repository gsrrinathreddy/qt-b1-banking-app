import React, { Component } from 'react'
import ServiceListItem from './ServiceListItem';

export default class ServicesList extends Component {
    render() {
        return (
            <div className="row">
                <ServiceListItem title="Credit Card Services"/>
                <ServiceListItem title="Loan Services"/>
                <ServiceListItem/>
                <ServiceListItem/>
                <ServiceListItem/>
                <ServiceListItem/>
                <ServiceListItem/>
                <ServiceListItem/>
            </div>
        )
    }
}
