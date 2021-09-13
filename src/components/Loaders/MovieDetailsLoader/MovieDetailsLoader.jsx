import { useBreakpoints } from "hooks/useBreakpoints";
import ContentLoader from "react-content-loader";

const MovieDetailsLoader = (props) => {
  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  return (
    <ContentLoader
      speed={2}
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
          <rect x="0" y="0" rx="0" ry="0" width="300" height="450" />
          <rect x="40" y="470" rx="0" ry="0" width="200" height="20" />
          <rect x="0" y="520" rx="0" ry="0" width="90" height="5" />
          <rect x="140" y="520" rx="0" ry="0" width="70" height="5" />
          <rect x="0" y="540" rx="0" ry="0" width="95" height="5" />
          <rect x="140" y="540" rx="0" ry="0" width="40" height="5" />
          <rect x="0" y="560" rx="0" ry="0" width="90" height="5" />
          <rect x="140" y="560" rx="0" ry="0" width="70" height="5" />
          <rect x="0" y="580" rx="0" ry="0" width="60" height="5" />
          <rect x="140" y="580" rx="0" ry="0" width="120" height="5" />
          <rect x="0" y="620" rx="0" ry="0" width="50" height="10" />
          <rect x="0" y="660" rx="0" ry="0" width="500" height="5" />
          <rect x="0" y="680" rx="0" ry="0" width="500" height="5" />
          <rect x="0" y="700" rx="0" ry="0" width="180" height="5" />
          <rect x="0" y="740" rx="0" ry="0" width="130" height="40" />
          <rect x="150" y="740" rx="0" ry="0" width="130" height="40" />
        </>
      )}
      {isTablet && (
        <>
          <rect x="0" y="0" rx="0" ry="0" width="300" height="450" />
          <rect x="400" y="0" rx="0" ry="0" width="140" height="20" />
          <rect x="350" y="50" rx="0" ry="0" width="90" height="5" />
          <rect x="350" y="70" rx="0" ry="0" width="70" height="5" />
          <rect x="350" y="90" rx="0" ry="0" width="95" height="5" />
          <rect x="350" y="110" rx="0" ry="0" width="40" height="5" />
          <rect x="500" y="50" rx="0" ry="0" width="90" height="5" />
          <rect x="500" y="70" rx="0" ry="0" width="70" height="5" />
          <rect x="500" y="90" rx="0" ry="0" width="110" height="5" />
          <rect x="500" y="110" rx="0" ry="0" width="120" height="5" />
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
        </>
      )}
      {isLaptop && (
        <>
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
        </>
      )}
    </ContentLoader>
  );
};

export default MovieDetailsLoader;
