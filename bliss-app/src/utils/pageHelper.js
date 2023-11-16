export function mutatePageState(pageNumber, pageLimit, pageContent, pageState) {
    // Some edge cases include the page number being greater than the min or max page by more than one
    // Empty array
    if (pageContent.length === 0) return -1
	//page limit and page content need to have the same length
	// if (pageContent.length !== pageLimit) return -1
	//page is 0
	if (pageLimit <= 0) return -1

	// Initialize if it is 0
	if (pageState.content.length === 0) {
		// pageState.minPage = pageNumber;
		pageState.maxPage = pageNumber;
		pageState.minPage = 1
		const endValue = (pageNumber - 1) * pageLimit
		pageState.content = Array(endValue).fill({}, 0, endValue)
		pageState.content.push(...pageContent)
		return pageState
	}

	// Check to see if the page retrieved already exists
	if (pageState.minPage <= pageNumber && pageState.maxPage >= pageNumber) {
		// Calculate where the page is in the array
		const endPosition = pageNumber * pageLimit - 1;
		const startPosition = endPosition - pageLimit;
		// Update the content
		pageState.content.splice(
			startPosition+1,
			pageLimit,
			...pageContent
		);
		// Return the content to verify it
		return pageState;
		//see if the content needs to be pushed or unshifted to the array
	} else {
		// see if the page needs to be added to the beginning. This would be true if the first page (aka min page) is bigger than the pageNumber retrieved
		if (pageState.minPage > pageNumber) {
            if (Math.abs(pageState.minPage - pageNumber) > 1) return -1
			pageState.content.unshift(...pageContent);
			pageState.minPage -= 1;
			return pageState;
			// Same idea here. If the page number is bigger than the last page (aka maxPage) then the content needs to be pushed
		} else if (pageState.maxPage < pageNumber) {
            if (Math.abs(pageState.maxPage - pageNumber) > 1) return -1
			pageState.content.push(...pageContent);
			pageState.maxPage += 1;
			return pageState;
		}
	}
}

/**
 * Parse a valid page number from a URLSearchParams object.
 *
 * Invalid states, empty states, and NaN are treated as the first page of results.
 */
export const parsePageFromQueryParams = (query) => {
	let initialPage = 1;
	const pageFromQuery = query.get("page");
	if (pageFromQuery) {
		initialPage = parseInt(pageFromQuery);
		if (isNaN(initialPage)) {
			initialPage = 1;
		}
	}

	return initialPage;
};

/**
 * Puts page params logic into a hook.
 *
 * This will re-run when the query parameters change.
 *
 * It returns functions that will change the query parameters to update the page correctly, as well.
 */
export const usePagination = (useSearchParams) => {
	const limit = 10;
	const [qparams, setqparams] = useSearchParams();

	const page = parsePageFromQueryParams(qparams);

	const onClickNext = () => {
		setqparams({ ...qparams, page: page + 1 });
	};

	const onClickPrev = () => {
		setqparams({ ...qparams, page: page - 1 });
	};

	// Page = 1: (1 - 1) * 15 = 0 * 15 = 0
	// Page = 2: (2 - 1) * 15 = 1 * 15 = 15
	// Page = 3: (3 - 1) * 15 = 2 * 15 = 30
	const offset = (page - 1) * limit;

	return {
		limit,
		offset,
		onClickNext,
		onClickPrev,
		page,
	};
};
