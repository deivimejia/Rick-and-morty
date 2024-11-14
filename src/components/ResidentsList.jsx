import ResidentCard from './ResidentCard';
import '../styles/ResidentsList.css';
import { useState } from 'react';
function ResidentsList({ residents }) {
	const [page, setPage] = useState(1);
	const itemsPerPage = 6;
	const totalItems = residents?.length;
	const maxPage = Math.ceil(totalItems / itemsPerPage);

	const onPrev = () => {
		if (page > 1) {
			setPage(page - 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	const onNext = () => {
		if (page < maxPage) {
			setPage(page + 1);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};
	const currentPageItems = residents?.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage,
	);
	return (
		<>
			<div className="cards">
				{currentPageItems?.map((resident) => {
					const residentSplit = resident.split('/');
					const id = residentSplit[residentSplit.length - 1];
					return <ResidentCard key={id} url={resident} />;
				})}
			</div>
			<div className="pag">
				<button
					className="pag__btn-prev"
					onClick={onPrev}
					disabled={page === 1}
				>
					Prev
				</button>
				<span className="pag__items">
					Page {page}/{maxPage}{' '}
				</span>
				<button
					className="pag__btn-next"
					onClick={onNext}
					disabled={page === maxPage}
				>
					Next
				</button>
			</div>
		</>
	);
}

export default ResidentsList;
