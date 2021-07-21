import ContentLoader from "react-content-loader";

const PageLoader = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={"100%"}
      speed={2}
      backgroundColor="transparent"
      {...props}
    >
      <circle cx="150" cy="86" r="12" />
      <circle cx="194" cy="86" r="12" />
      <circle cx="238" cy="86" r="12" />
    </ContentLoader>
  );
};

export default PageLoader;
