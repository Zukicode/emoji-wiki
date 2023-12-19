import styles from './Welcome.module.scss';

export const Welcome = ({ handleSearch }) => {
	return (
		<p className={styles.welcome}>
			Type words like <span onClick={() => handleSearch('love')}>love,</span>{' '}
			<span onClick={() => handleSearch('yes')}>yes</span> or{' '}
			<span onClick={() => handleSearch('music')}>music</span> and the
			corresponding emoji will appear. Or type an emoji to see related emojis.
		</p>
	);
};
