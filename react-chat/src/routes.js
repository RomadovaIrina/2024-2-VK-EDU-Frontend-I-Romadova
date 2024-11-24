const ROUTES = {
    ROOT: "/",
    LOGIN: '/login',
    REGISTER: '/register',
    CHAT: "/chat/:chatId",
    PROFILE: "/profile",
    AUTH: "/auth",

    CHAT_PATH: (chatId) => `/chat/${chatId}`
  };

export {ROUTES};