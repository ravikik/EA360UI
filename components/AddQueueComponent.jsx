import React, { Component } from 'react';
import QueueService from '../services/QueueService';




class AddQueueComponent extends Component {

         constructor(props) {
    
            super(props)
    
            this.state= {
                   queueName: '',
                   queueDesc: '',
                   queueOwner: ''
    
            }

            this.changeQueueNameHandler=this.changeQueueNameHandler.bind(this);
            this.changeQueueDescHandler=this.changeQueueDescHandler.bind(this);
            this.changeQueueOwnerHandler=this.changeQueueOwnerHandler.bind(this);
            this.saveQueue=this.saveQueue.bind(this);
         
        }


        saveQueue = (event) => {
            event.preventDefault();
            let queues = {queueName: this.state.queueName,queueDesc: this.state.queueDesc,queueOwner: this.state.queueOwner};
           console.log('Queue =>' + JSON.stringify(queues));

           QueueService.addQueues(queues).then(res => {

            this.props.history.push('/');
           });
            
            



        }
        cancel(){

            this.props.history.push('/listQueues');
        
        }
        changeQueueNameHandler= (event)=> {

            this.setState({queueName: event.target.value});
        }

        changeQueueDescHandler= (event)=> {

            this.setState({queueDesc: event.target.value});
        }

        changeQueueOwnerHandler= (event)=> {

            this.setState({queueOwner: event.target.value});
        }


    
    render() {
        return (
            <div>
                <div className="spacer" />
                <div className="container">
                    <div className="row">
                        <div className="addqueue">
                            <h3 className="text-center"> Add Queue </h3>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                      <label>Queue Name</label>
                                      <input placeholder="Queue Name" name="queueName" className="form-control"
                                         value={this.state.queueName} onChange={this.changeQueueNameHandler}/>

                                    </div>
                                    <div className="form-group">
                                      <label>Queue Desc</label>
                                      <input placeholder="Queue Desc" name="queueDesc" className="form-control"
                                         value={this.state.queueDesc} onChange={this.changeQueueDescHandler}/>

                                    </div>
                                    <div className="form-group">
                                      <label>Queue Owner</label>
                                      <input placeholder="Queue Owner" name="queueOwner" className="form-control"
                                         value={this.state.queueOwner} onChange={this.changeQueueOwnerHandler}/>

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveQueue}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                        

                                 

                                </form>

                            </div>


                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default AddQueueComponent;