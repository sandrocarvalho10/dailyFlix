import axios from 'axios';





export const api = axios.create({
  baseURL: 'https://api.dailymotion.com'
})

const getAccessToken = async () => {
  const res = await api.post(
    `https://www.dailymotion.com/oauth/token?grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_API_KEY}&&client_secret=${process.env.NEXT_PUBLIC_TOKEN_SECRET_API}`)

  console.log(res.data)
  const data = await res.data;
  return data.access_token;
};

const basicFetch = async (endpoint:string) => {

  const token = await getAccessToken();
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
  const req = await api.get(`${endpoint}`);
  console.log('Req ',req)
  return req;
};

export default{
  getHomeList: async () => {
    return [
      {
        slug: 'Jesus',
        title: 'Novela Jesus',
        items: await basicFetch(`playlist/x6hnrv/videos?limit=30&fields=thumbnail_url,id,title,owner`),
      },
      {
        slug: 'Apocalipse',
        title: 'Novela Apocalipse',
        items: await basicFetch(`playlist/x54krc/videos?limit=30&fields=thumbnail_url,id,title,owner`),
      }, {
        slug: 'Genesis',
        title: 'Novela Genesis',
        items: await basicFetch(`playlist/x70181/videos?limit=30&fields=thumbnail_url,id,title,owner`),
      },
      {
        slug: 'Amor',
        title: 'Amor sem Igual',
        items: await basicFetch(`playlist/x6jyfx/videos?limit=30&fields=thumbnail_url,id,title,owner`),
      },
      {
        slug: 'Topssima',
        title: 'Topssíma',
        items: await basicFetch(`playlist/x6a7co/videos?limit=30&fields=thumbnail_url,id,title,owner`),
      },
    ]
  }
}
