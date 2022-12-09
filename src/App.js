import './scss/style.scss';

const colors = ['aqua', 'orange', 'lightgreen', 'hotpink', 'red', 'pink'];

function App() {
	return (
		<div className='wrap'>
			<ul>
				{colors.map((color, idx) => {
					return (
						//반복도는 요소에는 무조건 고유값을 key속성으로 지정
						<li key={idx} style={{ color: color }}>
							{color}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
