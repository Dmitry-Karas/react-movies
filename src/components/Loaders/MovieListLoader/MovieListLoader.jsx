import { useBreakpoints } from "hooks/useBreakpoints";
import ContentLoader from "react-content-loader";

const MovieListLoader = (props) => {
  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  return (
    <ContentLoader
      speed={3}
      viewBox={
        (isMobile && "0 0 280 920") ||
        (isTablet && "0 0 620 980") ||
        (isLaptop && "0 0 960 660") ||
        "0 0 960 660"
      }
      backgroundColor="#f3f3f3"
      foregroundColor="#b1b1b1"
      {...props}
    >
      {isMobile && (
        <>
          <rect x="0" y="20" rx="0" ry="0" width="280" height="420" />
          <rect x="0" y="460" rx="0" ry="0" width="280" height="420" />
        </>
      )}

      {isTablet && (
        <>
          <rect x="0" y="20" rx="0" ry="0" width="304" height="456" />
          <rect x="320" y="20" rx="0" ry="0" width="304" height="456" />
          <rect x="0" y="496" rx="0" ry="0" width="304" height="456" />
          <rect x="320" y="496" rx="0" ry="0" width="304" height="456" />
        </>
      )}

      {isLaptop && (
        <>
          <rect x="0" y="20" rx="0" ry="0" width="226" height="300" />
          <rect x="247" y="20" rx="0" ry="0" width="226" height="300" />
          <rect x="492" y="20" rx="0" ry="0" width="226" height="300" />
          <rect x="737" y="20" rx="0" ry="0" width="226" height="300" />
          <rect x="0" y="340" rx="0" ry="0" width="226" height="300" />
          <rect x="247" y="340" rx="0" ry="0" width="226" height="300" />
          <rect x="492" y="340" rx="0" ry="0" width="226" height="300" />
          <rect x="737" y="340" rx="0" ry="0" width="226" height="300" />
        </>
      )}
    </ContentLoader>
  );
};

export default MovieListLoader;
