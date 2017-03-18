import React, { PropTypes, Component } from 'react';


export default class List extends Component{
	static PropTypes = {
		loadingLabel:PropTypes.string.isRequired,
		pageCount:PropTypes.number,
		renderItem:PropType.func.isRequired,
		items:PropTypes.array.isRequired,
		isFetching:PropTypes.bool.isRequired,
		onLoadMoreClick:PropTypes.func.isRequired,
		nextPageUrl:PropTypes.string
	}

	static defaultProps = {
		isFetching:true,
		loadingLabel:'Loading...'
	}

	renderLoadMore(){
		const { isFetching, onLoadMoreClick } = this.props;
		const style = {
			fontSize:'150%'
		}
		return (
			<button
				style={style}
				onClick={onLoadMoreClick}
				disabled={isFetching}
			>
				{isFetching ? 'Loading...' : 'Load More'}
			</button>
		);
	}

	render(){
		const { isFetching, nextPageUrl, pageCount, items, renderItem, loadingLabel } = this.props;
		const isEmpty = items.length === 0;

		if (isEmpty && isFetching) {
			return (
				<h2>
					<i>
						{loadingLabel}
					</i>
				</h2>
			);
		}

		const isLastPage = !nextPageUrl;

		if (isEmpty && isLastPage) {
			return (
				<h1>
					<i>Nothing here!</i>
				</h1>
			);
		}

		return (
			<div>
				{items.map(renderItem)}
				{pageCount > 0 && !isLastPage && this.renderLoadMore()}
			</div>
		);
	}
}
