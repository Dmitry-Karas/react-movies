import ContentLoader from 'react-content-loader'

const CastLoader = (props) => (
  <ContentLoader
    speed={3}
    width={1024}
    height={800}
    viewBox="0 0 1024 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#b1b1b1"
    {...props}
  >
    <rect x="0" y="20" rx="0" ry="0" width="185" height="300" />
    <rect x="195" y="20" rx="0" ry="0" width="185" height="300" />
    <rect x="390" y="20" rx="0" ry="0" width="185" height="300" />
    <rect x="585" y="20" rx="0" ry="0" width="185" height="300" />
    <rect x="780" y="20" rx="0" ry="0" width="185" height="300" />
    <rect x="0" y="340" rx="0" ry="0" width="185" height="300" />
    <rect x="195" y="340" rx="0" ry="0" width="185" height="300" />
    <rect x="390" y="340" rx="0" ry="0" width="185" height="300" />
    <rect x="585" y="340" rx="0" ry="0" width="185" height="300" />
    <rect x="780" y="340" rx="0" ry="0" width="185" height="300" />
  </ContentLoader>
)

export default CastLoader
