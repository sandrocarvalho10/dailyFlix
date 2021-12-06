import axios from 'axios';
import { NextApiRequest, NextApiResponse} from 'next'

const api = axios.create({
  baseURL: 'https://api.dailymotion.com'
})
api.get('/videos', (req, res) => {

}).then(() => {
    res.json({res}}
})