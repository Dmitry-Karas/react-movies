import ContentLoader from 'react-content-loader'

export const MovieListLoader = (props) => (
  <ContentLoader
    speed={3}
    width={1024}
    height={660}
    viewBox="0 0 1024 660"
    backgroundColor="#f3f3f3"
    foregroundColor="#b1b1b1"
    {...props}
  >
    <rect x="0" y="20" rx="0" ry="0" width="226" height="300" />
    <rect x="247" y="20" rx="0" ry="0" width="226" height="300" />
    <rect x="492" y="20" rx="0" ry="0" width="226" height="300" />
    <rect x="737" y="20" rx="0" ry="0" width="226" height="300" />
    <rect x="0" y="340" rx="0" ry="0" width="226" height="300" />
    <rect x="247" y="340" rx="0" ry="0" width="226" height="300" />
    <rect x="492" y="340" rx="0" ry="0" width="226" height="300" />
    <rect x="737" y="340" rx="0" ry="0" width="226" height="300" />
  </ContentLoader>
)