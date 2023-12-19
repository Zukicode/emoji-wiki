import { useEffect, useState } from 'react';

import styles from './Emoji.module.scss';

export const Emoji = ({ title, symbol }) => {
	const [isCopy, setCopy] = useState();

	const copyToClipboard = () => {
		setCopy(true);
		navigator.clipboard.writeText(symbol);
	};

	useEffect(() => {
		if (isCopy) {
			const timer = setTimeout(() => {
				setCopy(false);
			}, 2000);

			return () => clearInterval(timer);
		}
	}, [isCopy]);

	return (
		<div className={styles.emoji}>
			<span className={styles.symbol}>{symbol}</span>
			<div className={styles.footer}>
				<p>{title}</p>
				<button className={isCopy && styles.active} onClick={copyToClipboard}>
					{isCopy ? 'COPIED!' : 'COPY'}
				</button>
			</div>
		</div>
	);
};
