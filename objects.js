var playlist = {artistName: '[songTitle]'}
var songTitle = ''
function updatePlaylist (playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  artistName = ''
  return playlist
}
