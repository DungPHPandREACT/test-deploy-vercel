import { useState } from 'react';

const useCounter = (initital) => {
	console.log('initital: ', initital);
	const [count, setCount] = useState(initital);

	const handleIncrementCount = () => {
		setCount(count + 1);
	};

	return {
		count,
		handleIncrementCount,
	};
};

export default useCounter;
