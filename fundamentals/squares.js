const Square = (props) => {
	return React.createElement(
		'h1',
		{
			style: {
				backgroundColor: props.backgroundColor,
				color: props.textColor,
				display: 'inline-block',
				height: '300px',
				width: '300px'
			}
		},
		props.textColor + ' on ' + props.backgroundColor
	);
}

ReactDOM.render(
	React.createElement(
		'div',
		null,
		Square({
			backgroundColor: 'blue',
			textColor: 'white'
		}),
		Square({
			backgroundColor: 'red',
			textColor: 'blue'
		}),
		Square({
			backgroundColor: 'pink',
			textColor: 'green'
		})
	),
	document.getElementById('app')
)