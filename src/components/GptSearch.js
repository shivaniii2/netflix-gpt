import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";

export const GptSearch = () => {
  return (
<>

        <img alt=""
          className="fixed"
          src={BG_IMG}
        ></img>
  
      <div className="ml-[23%] z-50">
        <GptSearchBar />
      </div>
      <GptMovieSuggestion />
</>
       

  );
};
