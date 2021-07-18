import ContentLoader from 'react-content-loader'

const ReviewsLoader = (props) => (
  <ContentLoader
    speed={3}
    width={1024}
    height={320}
    viewBox="0 0 1024 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#b1b1b1"
    {...props}
  >
    <rect x="61" y="17" rx="3" ry="3" width="150" height="6" />
    <rect x="0" y="60" rx="3" ry="3" width="950" height="6" />
    <circle cx="20" cy="20" r="20" />
    <rect x="0" y="80" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="100" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="120" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="140" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="160" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="180" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="200" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="220" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="240" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="260" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="280" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="300" rx="3" ry="3" width="950" height="6" />
    <rect x="0" y="320" rx="3" ry="3" width="400" height="6" />
  </ContentLoader>
)

export default ReviewsLoader
