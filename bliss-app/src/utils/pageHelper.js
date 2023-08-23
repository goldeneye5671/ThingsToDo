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
