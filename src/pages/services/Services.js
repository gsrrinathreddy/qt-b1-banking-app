import React,{Component} from 'react';
import ServicesList from './ServicesList';
import './Services.css';
class Services extends Component{
    render(){
        return(
            <div className="services">
                <ServicesList/>
            </div>
        )
    }
}

export default Services;