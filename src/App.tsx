import React, { useState } from 'react';
import './App.css';

type FilterPropsType = 'all' | 'ruble' | 'dollar'

function App() {
	const [money, setMoney] = useState([
		{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
		{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
		{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
		{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
		{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	])

	const [filter, setFilter] = useState<FilterPropsType>('all')

	let currentMoney = money
	if (filter === 'ruble') {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
	} else if (filter === 'dollar') {
		currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
	}


	const onClickFilterHandler = (nameButton: FilterPropsType) => {
		setFilter(nameButton)
		console.log(nameButton)

	}


	return (
		<div className="App">
			<ul>
				{currentMoney.map((objFromMoneyArr, index) => {
					return (
						<li key={index}>
							<span>{objFromMoneyArr.banknots} - </span>
							<span>{objFromMoneyArr.value} - </span>
							<span>{objFromMoneyArr.number} - </span>
						</li>
					)
				})}

			</ul>
			<button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
			<button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
			<button onClick={() => onClickFilterHandler('all')}>all</button>
		</div>
	);
}

export default App;
