import React from "react";
import useGetTrailer from "../utils/useGetTrailer";
import { useSelector } from "react-redux";

export const VideoBg = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo)
  useGetTrailer(movieId)
  return (
    <div className="absolute">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"

      ></iframe>
      az
    </div>
  );
};
