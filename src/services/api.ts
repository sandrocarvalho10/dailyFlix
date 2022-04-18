import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.dailymotion.com'
})


const basicFetch = async (endpoint:string) => {
  const req = await api.get(`${endpoint}`);
  return req;
};

export default{
  getHomeList: async () => {
    return [
      {
        slug: 'Jesus',
        title: 'Novela Jesus',
        items: await basicFetch(`playlist/x6hnrv/videos`),
      },
      {
        slug: 'Apocalipse',
        title: 'Novela Apocalipse',
        items: await basicFetch(`playlist/x54krc/videos`),
      }, {
        slug: 'Genesis',
        title: 'Novela Genesis',
        items: await basicFetch(`playlist/x70181/videos`),
      },
      {
        slug: 'Amor',
        title: 'Amor sem Igual',
        items: await basicFetch(`playlist/x6jyfx/videos`),
      },
      {
        slug: 'Topssima',
        title: 'Topssíma',
        items: await basicFetch(`playlist/x6a7co/videos`),
      },
    ]
  }
}
