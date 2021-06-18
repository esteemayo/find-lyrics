import { useGlobalContext } from "../utils/context";
import Spinner from "./Spinner";
import Track from "./Track";

const Tracks = () => {
  const { track_list, heading, loading } = useGlobalContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {track_list.map((item) => {
          return <Track key={item.track.track_id} track={item.track} />;
        })}
      </div>
    </>
  );
};

export default Tracks;
