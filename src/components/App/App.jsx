import { useState } from 'react';

import styles from './App.module.scss';

//Components
import { Emojis } from 'components/Emojis/Emojis';
import { NotFound } from 'components/NotFound/NotFound';
import { Search } from 'components/Search/Search';
import { Welcome } from 'components/Welcome/Welcome';

//Emojis data
import emojisData from 'data/data.json';

export const App = () => {
	const [data, setData] = useState([]);
	const [isEmpty, setEmpty] = useState(false);

	const [search, setSearch] = useState('');

	const handleSearch = value => {
		if (value.length === 0) return;

		setSearch(value);

		const filteredByValue = emojisData.filter(emoji =>
			emoji.keywords.toLowerCase().includes(value)
		);

		const filteredByEmoji = emojisData.filter(emoji =>
			emoji.symbol.toLowerCase().includes(search)
		);

		const relatedByEmoji = filteredByEmoji.length
			? emojisData.filter(emoji =>
					emoji.keywords
						.toLowerCase()
						.includes(filteredByEmoji[0].keywords.split(' ')[0])
			  )
			: [];

		if (filteredByEmoji.length === 0 && filteredByValue.length === 0) {
			setEmpty(true);
		} else {
			if (filteredByValue.length !== 0) {
				setData(filteredByValue);
			}

			if (filteredByEmoji.length !== 0 && filteredByValue.length === 0) {
				setData(relatedByEmoji);
			}

			setEmpty(false);
		}
	};

	const backToWelcome = () => {
		setData([]);
		setEmpty(false);
		setSearch('');
	};

	return (
		<div className={styles.application}>
			<h1 onClick={backToWelcome} className={styles.title}>
				📙 Emoji wiki
			</h1>

			<Search
				search={search}
				setSearch={setSearch}
				handleSearch={handleSearch}
			/>

			{isEmpty ? (
				<NotFound />
			) : data.length === 0 && !isEmpty ? (
				<Welcome handleSearch={handleSearch} />
			) : (
				<Emojis search={search} data={data} />
			)}
		</div>
	);
};
