export function getTotalPage({ total, articlePerPage }) {
  const dividedValue = Math.floor(total / articlePerPage);

  if (total % articlePerPage === 0) {
    return dividedValue;
  }

  return dividedValue + 1;
}

function range(from, to) {
  const max = Math.max(from, to);
  const min = Math.min(from, to);
  const length = max - min + 1;

  if (from > to) {
    return [...new Array(length).keys()].map((num) => num + min).reverse();
  }
  return [...new Array(length).keys()].map((num) => num + min);
}

export function getPagination({
  currentPage,
  pagePerView,
  articlePerPage,
  total,
}) {
  const defaultPageData = {
    movable: false,
    page: 1, // 이동할 수 없는 페이지번호를 나타낼 때 현재 페이지번호를 저장하여 페이지이동이 일어나지 않도록 함.
  };

  if (total <= 0) {
    return {
      pages: [],
      last: defaultPageData,
      next: defaultPageData,
      previous: defaultPageData,
      first: defaultPageData,
    };
  }
  const totalPage = getTotalPage({ total, articlePerPage });
  const startPage =
    Math.floor((currentPage - 1) / pagePerView) * pagePerView + 1;
  const tempEndPage = startPage + pagePerView - 1;
  const endPage = tempEndPage > totalPage ? totalPage : tempEndPage;

  const pages = range(startPage, endPage);

  const canFirst = currentPage > 1;
  const canLast = currentPage < totalPage;
  const canNext = endPage < totalPage;
  const canPrevious = startPage !== 1;

  const next = !canNext
    ? defaultPageData
    : {
        page: startPage + pagePerView,
        movable: true,
      };
  const previous = !canPrevious
    ? defaultPageData
    : {
        page: startPage - pagePerView,
        movable: true,
      };
  const first = !canFirst
    ? defaultPageData
    : {
        page: 1,
        movable: true,
      };
  const last = !canLast
    ? defaultPageData
    : {
        page: totalPage,
        movable: true,
      };

  return {
    pages,
    first,
    previous,
    next,
    last,
  };
}
