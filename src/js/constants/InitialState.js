const INITIAL_STATE = {
  data: {
    photos: [],
    videos: [],
    posts: [],
    MarketItems: []
  },
  reverse: false,
  aciveState: 'POSTS',
  states: {
    STACK: {},
    DATE: {
      beginDate: '',
      endDate: ''
    },
    SEARCH: {},
    POSTS: {},
    MEDIA: {},
    RESOURCES: {},
  }
};
export default INITIAL_STATE;
