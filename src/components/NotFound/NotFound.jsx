import styles from './NotFound.module.scss';

import birdImage from '../../assets/bird.webp';

export const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<img src={birdImage} alt='bird' />
			<h1>Not found!</h1>
			<p>Try to reword your query, or use a search for similar emoji!</p>
		</div>
	);
};
