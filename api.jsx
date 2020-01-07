import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 349d40309449f89dcbc5942e92ea0712b7dcf8d321453d31ee7536f276afacab'
    }
})