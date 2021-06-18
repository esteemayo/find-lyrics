import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Moment from "react-moment";

import { getLyrics, getTrack } from "../services/musicService";
import Spinner from "./Spinner";

const Lyrics = () => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchLyrics = async () => {
      const { data } = await getLyrics(id);
      console.log(data);
      setLyrics(data.message.body.lyrics);

      const { data: track } = await getTrack(id);
      console.log(track);
      setTrack(track.message.body.track);
    };

    fetchLyrics();
  }, [id]);

  //   if (
  //     track === undefined ||
  //     lyrics === undefined ||
  //     Object.keys(track).length === 0 ||
  //     Object.keys(lyrics).length === 0
  //   ) {
  //     return <Spinner />;
  //   }

  if (!track || !lyrics) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/" className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <div className="card">
        <h5 className="card-header">
          {track.track_name} by{" "}
          <span className="text-secondary">{track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="card-text">{lyrics.lyrics_body}</p>
        </div>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Album ID</strong>: {track.album_id}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>:{" "}
          {track.primary_genres.music_genre_list.length === 0
            ? "NO GENRE AVAILABLE"
            : track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name}
        </li>
        <li className="list-group-item">
          <strong>Explicit Words</strong>: {track.explicit === 0 ? "No" : "Yes"}
        </li>
        <li className="list-group-item">
          <strong>Release Date</strong>:{" "}
          <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
        </li>
      </ul>
    </>
  );
};

export default Lyrics;
