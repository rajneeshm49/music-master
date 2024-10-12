import React from "react";

const Artist = ({ artist }) => {
  if (!artist) {
    return null;
  }
  const { name, images, genres, followers } = artist;
  return (
    <div className="artist">
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(",")}</p>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover",
        }}
      ></img>
    </div>
  );
};

export default Artist;
