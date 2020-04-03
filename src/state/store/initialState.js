const initialState = {
  articles: [],
  articleList: true,
  singleArticle: undefined,
  activeItem: 'latest_news',
  selectedCategory: '',
  currentUser: {},
  showForm: false,
  flashMessage: "",
  authenticated: false,
  showLoginForm: false,
  welcomeMessage: "",
  showSignUpForm: false,
  session: { edition: "country wide" }
};

export default initialState;
