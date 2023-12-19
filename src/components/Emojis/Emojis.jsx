import styles from './Emojis.module.scss';

import { Emoji } from 'components/Emoji/Emoji';

export const Emojis = ({ data }) => {
	return (
		<div className={styles.emojis}>
			{data.map(emoji => (
				<Emoji key={emoji.title} {...emoji} />
			))}
		</div>
	);
};
