import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {
  breakCss,
  breakLinkCss,
  containerCss,
  pageCss,
  pageLinkCss,
  activePageCss,
  activeLinkCss,
  arrowItemsCss,
  arrowLinksCss,
  disabledCss,
} from "./Pagination.styled";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { useBreakpoints } from "hooks/useBreakpoints";

const Pagination = ({ initialPage, pageCount, onClick }) => {
  const { isMobile } = useBreakpoints();

  return (
    <ReactPaginate
      initialPage={initialPage - 1}
      disableInitialCallback={true}
      pageCount={pageCount}
      pageRangeDisplayed={isMobile ? 1 : 5}
      marginPagesDisplayed={isMobile ? 1 : 1}
      previousLabel={<TiArrowLeft size={28} />}
      nextLabel={<TiArrowRight size={28} />}
      breakLabel={<IoEllipsisHorizontalSharp size={24} />}
      onPageChange={onClick}
      breakClassName={breakCss}
      breakLinkClassName={breakLinkCss}
      containerClassName={containerCss}
      pageClassName={pageCss}
      pageLinkClassName={pageLinkCss}
      activeClassName={activePageCss}
      activeLinkClassName={activeLinkCss}
      previousClassName={`${arrowItemsCss} previous`}
      nextClassName={`${arrowItemsCss} next`}
      previousLinkClassName={arrowLinksCss}
      nextLinkClassName={arrowLinksCss}
      disabledClassName={disabledCss}
    />
  );
};

Pagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pagination;
