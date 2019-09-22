
const getVideoImage = (videoSrcURL) => {
  // eslint-disable-next-line
  const regex = 'embed\/([^\&\?\/]+)'
  const match = videoSrcURL.match(regex)
  if ( match && match[1].length === 11 ){
    return match[1]
  } else {
    return "Could not extract video ID."
  }
}

export default getVideoImage