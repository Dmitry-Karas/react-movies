import { useBreakpoints } from "hooks/useBreakpoints";
import ContentLoader from "react-content-loader";

const CastLoader = (props) => {
  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  return (
    <ContentLoader
      speed={3}
      viewBox={
        (isMobile && "0 0 280 1100") ||
        (isTablet && "0 0 620 820") ||
        (isLaptop && "0 0 960 860") ||
        "0 0 960 660"
      }
      backgroundColor="#f3f3f3"
      foregroundColor="#b1b1b1"
      {...props}
    >
      {isMobile && (
        <>
          <rect x="0" y="20" rx="0" ry="0" width="280" height="430" />
          <rect x="100" y="460" rx="0" ry="0" width="70" height="10" />
          <rect x="45" y="480" rx="0" ry="0" width="80" height="6" />
          <rect x="145" y="480" rx="0" ry="0" width="80" height="6" />
          <rect x="80" y="500" rx="0" ry="0" width="110" height="10" />
          <rect x="45" y="520" rx="0" ry="0" width="80" height="6" />
          <rect x="145" y="520" rx="0" ry="0" width="80" height="6" />
          <rect x="0" y="560" rx="0" ry="0" width="280" height="430" />
          <rect x="100" y="1000" rx="0" ry="0" width="70" height="10" />
          <rect x="45" y="1020" rx="0" ry="0" width="80" height="6" />
          <rect x="145" y="1020" rx="0" ry="0" width="80" height="6" />
          <rect x="80" y="1040" rx="0" ry="0" width="110" height="10" />
          <rect x="45" y="1060" rx="0" ry="0" width="80" height="6" />
          <rect x="145" y="1060" rx="0" ry="0" width="80" height="6" />
        </>
      )}
      {isTablet && (
        <>
          <>
            <rect x="0" y="20" rx="0" ry="0" width="202" height="280" />
            <rect x="65" y="320" rx="0" ry="0" width="60" height="10" />
            <rect x="25" y="340" rx="0" ry="0" width="60" height="6" />
            <rect x="105" y="340" rx="0" ry="0" width="70" height="6" />
            <rect x="45" y="360" rx="0" ry="0" width="100" height="10" />
            <rect x="25" y="380" rx="0" ry="0" width="60" height="6" />
            <rect x="105" y="380" rx="0" ry="0" width="70" height="6" />

            <rect x="210" y="20" rx="0" ry="0" width="202" height="280" />
            <rect x="275" y="320" rx="0" ry="0" width="60" height="10" />
            <rect x="235" y="340" rx="0" ry="0" width="60" height="6" />
            <rect x="315" y="340" rx="0" ry="0" width="70" height="6" />
            <rect x="255" y="360" rx="0" ry="0" width="100" height="10" />
            <rect x="235" y="380" rx="0" ry="0" width="60" height="6" />
            <rect x="315" y="380" rx="0" ry="0" width="70" height="6" />

            <rect x="420" y="20" rx="0" ry="0" width="202" height="280" />
            <rect x="485" y="320" rx="0" ry="0" width="60" height="10" />
            <rect x="445" y="340" rx="0" ry="0" width="60" height="6" />
            <rect x="525" y="340" rx="0" ry="0" width="70" height="6" />
            <rect x="465" y="360" rx="0" ry="0" width="100" height="10" />
            <rect x="445" y="380" rx="0" ry="0" width="60" height="6" />
            <rect x="525" y="380" rx="0" ry="0" width="70" height="6" />

            <rect x="0" y="420" rx="0" ry="0" width="202" height="280" />
            <rect x="65" y="720" rx="0" ry="0" width="60" height="10" />
            <rect x="25" y="740" rx="0" ry="0" width="60" height="6" />
            <rect x="105" y="740" rx="0" ry="0" width="70" height="6" />
            <rect x="45" y="760" rx="0" ry="0" width="100" height="10" />
            <rect x="25" y="780" rx="0" ry="0" width="60" height="6" />
            <rect x="105" y="780" rx="0" ry="0" width="70" height="6" />

            <rect x="210" y="420" rx="0" ry="0" width="202" height="280" />
            <rect x="275" y="720" rx="0" ry="0" width="60" height="10" />
            <rect x="235" y="740" rx="0" ry="0" width="60" height="6" />
            <rect x="315" y="740" rx="0" ry="0" width="70" height="6" />
            <rect x="255" y="760" rx="0" ry="0" width="100" height="10" />
            <rect x="235" y="780" rx="0" ry="0" width="60" height="6" />
            <rect x="315" y="780" rx="0" ry="0" width="70" height="6" />

            <rect x="420" y="420" rx="0" ry="0" width="202" height="280" />
            <rect x="485" y="720" rx="0" ry="0" width="60" height="10" />
            <rect x="445" y="740" rx="0" ry="0" width="60" height="6" />
            <rect x="525" y="740" rx="0" ry="0" width="70" height="6" />
            <rect x="465" y="760" rx="0" ry="0" width="100" height="10" />
            <rect x="445" y="780" rx="0" ry="0" width="60" height="6" />
            <rect x="525" y="780" rx="0" ry="0" width="70" height="6" />
          </>
        </>
      )}
      {isLaptop && (
        <>
          <rect x="0" y="20" rx="0" ry="0" width="230" height="280" />
          <rect x="80" y="320" rx="0" ry="0" width="60" height="10" />
          <rect x="40" y="340" rx="0" ry="0" width="60" height="6" />
          <rect x="120" y="340" rx="0" ry="0" width="70" height="6" />
          <rect x="60" y="360" rx="0" ry="0" width="100" height="10" />
          <rect x="40" y="380" rx="0" ry="0" width="60" height="6" />
          <rect x="120" y="380" rx="0" ry="0" width="70" height="6" />

          <rect x="245" y="20" rx="0" ry="0" width="230" height="280" />
          <rect x="320" y="320" rx="0" ry="0" width="60" height="10" />
          <rect x="280" y="340" rx="0" ry="0" width="60" height="6" />
          <rect x="360" y="340" rx="0" ry="0" width="70" height="6" />
          <rect x="300" y="360" rx="0" ry="0" width="100" height="10" />
          <rect x="280" y="380" rx="0" ry="0" width="60" height="6" />
          <rect x="360" y="380" rx="0" ry="0" width="70" height="6" />

          <rect x="485" y="20" rx="0" ry="0" width="230" height="280" />
          <rect x="560" y="320" rx="0" ry="0" width="60" height="10" />
          <rect x="520" y="340" rx="0" ry="0" width="60" height="6" />
          <rect x="600" y="340" rx="0" ry="0" width="70" height="6" />
          <rect x="540" y="360" rx="0" ry="0" width="100" height="10" />
          <rect x="520" y="380" rx="0" ry="0" width="60" height="6" />
          <rect x="600" y="380" rx="0" ry="0" width="70" height="6" />

          <rect x="725" y="20" rx="0" ry="0" width="230" height="280" />
          <rect x="800" y="320" rx="0" ry="0" width="60" height="10" />
          <rect x="760" y="340" rx="0" ry="0" width="60" height="6" />
          <rect x="840" y="340" rx="0" ry="0" width="70" height="6" />
          <rect x="780" y="360" rx="0" ry="0" width="100" height="10" />
          <rect x="760" y="380" rx="0" ry="0" width="60" height="6" />
          <rect x="840" y="380" rx="0" ry="0" width="70" height="6" />

          <rect x="0" y="420" rx="0" ry="0" width="230" height="280" />
          <rect x="80" y="720" rx="0" ry="0" width="60" height="10" />
          <rect x="40" y="740" rx="0" ry="0" width="60" height="6" />
          <rect x="120" y="740" rx="0" ry="0" width="70" height="6" />
          <rect x="60" y="760" rx="0" ry="0" width="100" height="10" />
          <rect x="40" y="780" rx="0" ry="0" width="60" height="6" />
          <rect x="120" y="780" rx="0" ry="0" width="70" height="6" />

          <rect x="245" y="420" rx="0" ry="0" width="230" height="280" />
          <rect x="320" y="720" rx="0" ry="0" width="60" height="10" />
          <rect x="280" y="740" rx="0" ry="0" width="60" height="6" />
          <rect x="360" y="740" rx="0" ry="0" width="70" height="6" />
          <rect x="300" y="760" rx="0" ry="0" width="100" height="10" />
          <rect x="280" y="780" rx="0" ry="0" width="60" height="6" />
          <rect x="360" y="780" rx="0" ry="0" width="70" height="6" />

          <rect x="485" y="420" rx="0" ry="0" width="230" height="280" />
          <rect x="560" y="720" rx="0" ry="0" width="60" height="10" />
          <rect x="520" y="740" rx="0" ry="0" width="60" height="6" />
          <rect x="600" y="740" rx="0" ry="0" width="70" height="6" />
          <rect x="540" y="760" rx="0" ry="0" width="100" height="10" />
          <rect x="520" y="780" rx="0" ry="0" width="60" height="6" />
          <rect x="600" y="780" rx="0" ry="0" width="70" height="6" />

          <rect x="725" y="420" rx="0" ry="0" width="230" height="280" />
          <rect x="800" y="720" rx="0" ry="0" width="60" height="10" />
          <rect x="760" y="740" rx="0" ry="0" width="60" height="6" />
          <rect x="840" y="740" rx="0" ry="0" width="70" height="6" />
          <rect x="780" y="760" rx="0" ry="0" width="100" height="10" />
          <rect x="760" y="780" rx="0" ry="0" width="60" height="6" />
          <rect x="840" y="780" rx="0" ry="0" width="70" height="6" />
        </>
      )}
    </ContentLoader>
  );
};

export default CastLoader;
