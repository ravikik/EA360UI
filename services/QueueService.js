import axios from 'axios';

const GET_QUEUE_API_BASE_URL= "http://localhost:8080/api/v1/queues/getAllQueues";
const GET_ADD_QUEUE_API_BASE_URL= "http://localhost:8080/api/v1/queues/createQueue";




class QueueService {

     getQueues(){

        return axios.get(GET_QUEUE_API_BASE_URL);

     }

     addQueues(queues){
        return axios.post(GET_ADD_QUEUE_API_BASE_URL, queues);



     }
}

export default new QueueService()

