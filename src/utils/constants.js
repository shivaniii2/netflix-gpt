export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const USER_AVTAR = "https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" 

export const OPTIONS = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer" + process.env.REACT_APP_TMDB_KEY,
    accept: "application/json",
  },
};
export const CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [{identifier : "en" , name : "English"},{identifier : "hindi" , name : "Hindi"},{identifier : "french" , name : "French"}]

export const OPEN_AIKEY =process.env.REACT_APP_OPEN_AI_KEY


