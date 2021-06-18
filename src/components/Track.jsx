import { Link } from "react-router-dom";
import { FaPlay, FaCompactDisc, FaChevronRight } from "react-icons/fa";

const Track = ({
  track: { track_id, artist_name, album_name, track_name },
}) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{artist_name}</h5>
          <p className="card-text">
            <strong>
              <FaPlay /> Track
            </strong>
            : {track_name}
            <br />
            <strong>
              <FaCompactDisc /> Album
            </strong>
            : {album_name}
          </p>
          <Link
            to={`/lyrics/track/${track_id}`}
            className="btn btn-dark btn-block"
          >
            <FaChevronRight /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
