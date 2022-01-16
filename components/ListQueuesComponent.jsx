import React, { Component } from 'react';
import QueueService from '../services/QueueService';
import '../App.css'

class ListQueuesComponent extends Component {
    constructor(props) {

        super(props)

        this.state= {
               Queues:[]

        }
        this.AddQueue = this.AddQueue.bind(this);
    }

    componentDidMount(){

        QueueService.getQueues().then((res) =>{
            this.setState({Queues: res.data});


        });
    }

    AddQueue(){

        this.props.history.push('/addQueue');
    }

    render() {
        return (
            <body>
            <div className='spacer'>&nbsp;</div>
            <div className='bg'/>
            <div>
           
              

                <div className="row">
                      <table className="listqueue">
                         <thead>
                             <tr>
                                <th>Queue Name</th>
                                <th>Queue Description</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                                <th>Queue Owner</th>
                             

                             </tr>

                         </thead>

                         <tbody>
                             {
                               this.state.Queues.map(
                                  Queues =>
                                      <tr key = {Queues.id}>
                                      <td> {Queues.queueName}  </td>
                                      <td> {Queues.queueDesc}  </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>
                                      <td> {Queues.queueOwner} </td>


                                  </tr>

                               )                  
                                         

                             }


                         </tbody>

                      </table>

                </div>
                <div className="spacer-button" />
                <div className = "row">
                    <button className="addbutton" onClick={this.AddQueue}>Add Queue</button>
                    <button className="addbutton" onClick={this.AddQueue}>Edit Queue</button>
                    <button className="addbutton" onClick={this.AddQueue}>Delete Queue</button>

                </div>
                    
                
            </div>

            </body>    
        );
    }
}

export default ListQueuesComponent;