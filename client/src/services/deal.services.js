import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'http://localhost:3000/api/deals',
            withCredentials: true
        })
    }

    getAllDeals = () => this.service.get('/getAllDeals').then(response => response.data)
    getDealDetails = id => this.service.get(`/getOneDeal/${id}`).then(response => response.data)
    getDealCreator = name => this.service.get(`/getDealCreator/${name}`).then(response => response.data)
    giveLike = deal => this.service.get(`/giveLike/${deal}`).then(response => response.data);
    giveDislike = deal => this.service.get('/giveDislike').then(response => response.data);
    // getTotalLikes = deal => this.service.get(`/getTotalLikes/${deal}`).then(response => response.data);
    
}