var playlist = {artistName: 'Artist Name', songTitle: 'Song Title'}
function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign(playlist, artistName, songTitle)
  return playlist
}
