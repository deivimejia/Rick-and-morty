import React, { useRef, useState } from 'react';
import '../styles/Search.css';
function Search({ setLocationId }) {
	const [error, setError] = useState('');
	const inputRef = useRef();
	const onSubmit = (e) => {
		e.preventDefault();
		const id = parseInt(inputRef.current.value);
		if (isNaN(id)) {
			setError('❌ Invalid Number');
			setTimeout(() => {
				setError('');
				inputRef.current.value = '';
			}, 3000);
			return;
		}
		if (id < 1 || id > 126) {
			setError('❌ Hey! you must provide an id from 1 to 126 🥹');
			setTimeout(() => {
				setError('');
				inputRef.current.value = '';
			}, 3000);
			return;
		}

		setLocationId(id);
		inputRef.current.value = '';
	};
	return (
		<>
			<form onSubmit={onSubmit} className="search">
				<input ref={inputRef} type="text" className=" search__input" />
				<button className=" search__btnt">Search</button>
			</form>
			<p className=" message__error">{error && error}</p>
		</>
	);
}

export default Search;
