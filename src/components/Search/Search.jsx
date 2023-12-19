import { useState } from 'react';

import styles from './Search.module.scss';

export const Search = ({ search, setSearch, handleSearch }) => {
	const [isActiveInput, setActiveInput] = useState(false);

	const onChangeValue = value => setSearch(value);

	const onBlurInput = () => setActiveInput(false);
	const onFocusInput = () => setActiveInput(true);

	return (
		<div className={styles.search}>
			<div className={styles.searchValue}>
				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					className={
						isActiveInput ? `${styles.icon} ${styles.active}` : styles.icon
					}
				>
					<circle cx='12' cy='12' r='10' />
					<circle cx='12' cy='12' r='4' />
					<line x1='4.93' x2='9.17' y1='4.93' y2='9.17' />
					<line x1='14.83' x2='19.07' y1='14.83' y2='19.07' />
					<line x1='14.83' x2='19.07' y1='9.17' y2='4.93' />
					<line x1='14.83' x2='18.36' y1='9.17' y2='5.64' />
					<line x1='4.93' x2='9.17' y1='19.07' y2='14.83' />
				</svg>

				<input
					type='text'
					placeholder='Search...'
					value={search}
					onKeyDown={e => e.key === 'Enter' && handleSearch(search)}
					onChange={e => onChangeValue(e.target.value)}
					onBlur={onBlurInput}
					onFocus={onFocusInput}
				/>
			</div>
			<button onClick={() => handleSearch(search)}>Find 🔍</button>
		</div>
	);
};
