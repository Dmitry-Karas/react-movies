import { useBreakpoints } from "hooks/useBreakpoints";
import ContentLoader from "react-content-loader";

const ReviewsLoader = (props) => {
  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  return (
    <ContentLoader
      speed={3}
      viewBox={
        (isMobile && "0 0 280 360") ||
        (isTablet && "0 0 620 360") ||
        (isLaptop && "0 0 960 360") ||
        "0 0 960 660"
      }
      backgroundColor="#f3f3f3"
      foregroundColor="#b1b1b1"
      {...props}
    >
      <rect x="80" y="24" rx="3" ry="3" width="150" height="10" />
      <circle cx="30" cy="30" r="30" />
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
      <rect x="0" y="320" rx="3" ry="3" width="950" height="6" />
    </ContentLoader>
  );
};

export default ReviewsLoader;
