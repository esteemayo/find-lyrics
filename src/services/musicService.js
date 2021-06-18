import http from "./httpService";

export function getMusics() {
  return http.get(
    `/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
  );
}

export function getLyrics(id) {
  return http.get(
    `/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
  );
}

export function getTrack(id) {
  return http.get(
    `/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
  );
}

export function searchTrack(trackTitle) {
  return http.get(
    `/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
  );
}
