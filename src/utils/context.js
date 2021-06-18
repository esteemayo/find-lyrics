import {
  useState,
  useEffect,
  useReducer,
  useContext,
  useCallback,
  createContext,
} from "react";

import { getMusics, searchTrack } from "../services/musicService";
import reducer from "./reducer";

const initialStates = {
  track_list: [],
  heading: "Top 10 Tracks",
  loading: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [trackTitle, setTrackTitle] = useState("");

  const [state, dispatch] = useReducer(reducer, initialStates);

  const fetchTracks = async () => {
    dispatch({ type: "LOADING" });
    const { data } = await getMusics();
    // console.log(data);
    dispatch({ type: "DISPLAY_TRACK", payload: data.message.body.track_list });
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchSearchTracks = useCallback(async () => {
    const { data } = await searchTrack(trackTitle);
    console.log(data);
    dispatch({ type: "SEARCH_TRACKS", payload: data.message.body.track_list });
  }, [trackTitle]);

  useEffect(() => {
    fetchSearchTracks();
  }, [fetchSearchTracks]);

  return (
    <AppContext.Provider value={{ ...state, setTrackTitle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
