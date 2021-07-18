import ContentLoader from 'react-content-loader'

const MovieDetailsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1024}
    height={460}
    viewBox="0 0 1024 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#b1b1b1"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="300" height="450" />
    <rect x="520" y="0" rx="0" ry="0" width="200" height="20" />
    <rect x="350" y="50" rx="0" ry="0" width="90" height="5" />
    <rect x="350" y="70" rx="0" ry="0" width="70" height="5" />
    <rect x="350" y="90" rx="0" ry="0" width="95" height="5" />
    <rect x="350" y="110" rx="0" ry="0" width="40" height="5" />
    <rect x="540" y="50" rx="0" ry="0" width="90" height="5" />
    <rect x="540" y="70" rx="0" ry="0" width="70" height="5" />
    <rect x="540" y="90" rx="0" ry="0" width="110" height="5" />
    <rect x="540" y="110" rx="0" ry="0" width="120" height="5" />
    <rect x="350" y="150" rx="0" ry="0" width="50" height="10" />
    <rect x="350" y="190" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="205" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="220" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="235" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="250" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="265" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="280" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="295" rx="0" ry="0" width="500" height="5" />
    <rect x="350" y="310" rx="0" ry="0" width="200" height="5" />
    <rect x="350" y="340" rx="0" ry="0" width="130" height="40" />
    <rect x="500" y="340" rx="0" ry="0" width="130" height="40" />
  </ContentLoader>
)

export default MovieDetailsLoader
