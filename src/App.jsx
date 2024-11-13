import { useEffect, useState } from 'react';
import useFetch from './hooks/useFetch';
import CardInfo from './components/CardInfo.jsx';
import ResidentsList from './components/ResidentsList.jsx';
import Search from './components/Search.jsx';
import './App.css';
import Error from './components/Error.jsx';
import Loading from './components/Loading.jsx';

function App() {
	const [location, setLocation, loading, error] = useFetch();
	const [locationId, setLocationId] = useState(1);
	useEffect(() => {
		setLocation(`https://rickandmortyapi.com/api/location/${locationId}`);
	}, [locationId]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="hero" />
					<div className="container">
						<Search setLocationId={setLocationId} />
						{error ? (
							<Error />
						) : (
							<>
								<CardInfo location={location} />
								<ResidentsList residents={location?.residents} />
							</>
						)}
					</div>
				</>
			)}
		</>
	);
}

export default App;
