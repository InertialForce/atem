const ADD_NEWS = "ADD-NEWS";
const UPDATE_NEW_NEWS_TEXT = "UPDATE-NEW-NEWS-TEXT";

let initialState = {
  newsData: [
    {id: 1, newsMessage: "Смешная картинка"},
    {id: 2, newsMessage: "Не смешная картинка"}
  ],
  newNewsText: ""
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS: {
      let newNews = {
        id: 3,
        newsMessage: state.newNewsText
      };
      let stateCopy = {...state};
      stateCopy.newsData = [...state.newsData];
      stateCopy.newsData.push(newNews);
      stateCopy.newNewsText = "";
      return stateCopy;
    }
    case UPDATE_NEW_NEWS_TEXT: {
      let stateCopy = {...state};
      stateCopy.newNewsText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addNewsCreator = () => ({type: ADD_NEWS});
export const updateNewNewsCreator = (text) => ({type: UPDATE_NEW_NEWS_TEXT, newText: text});

export default newsReducer;