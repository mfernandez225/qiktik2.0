
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Highcharts from 'highcharts/highstock';
// import chartAPI from './components/Chart';

// const ChartHighstock = {
// 	stockSelected, setStockSelected
// }

class ChartHighstock extends Component {
	_isMounted = false;
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: true,
	// }
	this.state = {
		items: []}
	};

	

	


	
	// componentDidMount() {
		
	// 	this._isMounted = true;
	// 	this.createChart();

	// 	// const symbols = ['AAPL', 'MSFT']
	// 	// const chart = chartAPI()


	// 	// symbols.map((symbol) => {
	// 	// 	chart.getQuote(symbol).then((response) => {
	// 	// 		console.log('Got response from API')
	// 	// 		console.log(response)

	// 	// 		const date = response.data.chart[1].date
	// 	// 		const label = response.data.chart[1].label
	// 	// 		const close = response.data.chart[3].close

	// 	// 		let state = this.state
	// 	// 		// state[symbol] = [response.data.chart[1].date] + [response.data.chart[1].label] + [response.data.chart[1].close]
	// 	// 		state[symbol] = [date] + [label] + [close]

	// 	// 		this.setState(state)
	// 	// })
		
	// 	// });
	// }

	




	componentDidMount() {
		this._isMounted = true;
		this.createChart();

		fetch(
			// `https://cloud.iexapis.com/stable/stock/${stockSelected}/batch?token=pk_ab67997aa39c4296b79de441635e9a49&types=chart,quote&range=ytd`
			`https://cloud.iexapis.com/stable/stock/AAPL/batch?token=pk_ab67997aa39c4296b79de441635e9a49&types=chart,quote&range=ytd`)
		  .then(response => {
			return response.json();
		  })
		  .then((data) => {
			this.setState({
			  items: data.chart.map(item => ({
				  dates: data.date,
				  closes: data.close,
			  })
			)})
			console.log(data)
			console.log(data.chart.map(data => data.date))
			console.log(data.chart.map(data => data.close))
			// console.log(data.chart.map(data => data.date + data.close))
		  }
		)
		}

	//   renderItems() {
	// 	return this.state.items.map(item => {
	// 	  <NewSingleItem key={item.date} item={item.close} />;
	// 	});
	//   }



	componentDidUpdate() {
    this.createChart();
  }

	// createChart() {
	// 	let formatData = [];
	// 	formatData = this.props.data.map(obj => {
	// 		const date = obj['Date'].split("/");
	// 		// const date = obj['response.data.chart.date'];
	// 		const dateInSeconds = new Date(`20${date[2]}`, +date[1] - 1, date[0]).getTime();
	// 		return [dateInSeconds, obj['Close']];
	// 		// return [obj['response.data.chart.date'], obj['response.data.chart.close']];
			
	// 	}).reverse();

	// 	Highcharts.stockChart('chart', {
    //     rangeSelector: {
    //     	selected: 1
    //     },

    //     title: {
    //       text: this.props.title
    //     },
				
    //     series: [{
    //         name: '',
    //         data: formatData,
    //         tooltip: {
    //           valueDecimals: 2
    //         }
    //     }]
    // });
	// }

	createChart() {
		let formatData = [];
		formatData = this.state.items.map(data => {
			// const date = obj['Date'].split("/");
			const date = [data.date];
			// const dateInSeconds = new Date(`20${Date[2]}`, + Date[1] - 1, Date[0]).getTime();
			const dateInSeconds = new Date().getTime();
			// return [dateInSeconds, obj['Close']];
			return [date, dateInSeconds, ['(data => data.close)']];

			
			
			
		}).reverse();

		console.log(formatData)

		Highcharts.stockChart('chart', {
        rangeSelector: {
        	selected: 1
        },

        title: {
          text: this.props.title
		},
				
        series: [{
			name: '',
			data: formatData,
            tooltip: {
              valueDecimals: 2
            }
        }]
    });
	}

	// renderItems() {
	// 	return this.state.items.map(item => {
	// 	  <NewSingleItem key={item.date} item={item.close} />;

	render() {
		return (
			
			<div>
				<div id='chart'>Highstock</div>

				<br></br>
				{/* <div>{data.chart.map(data => data.close)}</div> */}
				<view>
					<view>
					{/* <view><text>AAPL</text><text>{this.state.AAPL}</text></view> */}
					{/* <view><text>Test AAPL</text><text>{this.state(data.chart.map(data => data.close))}</text></view> */}
					{/* <br></br>
					<view><text>MSFT</text><text>{this.state.MSFT}</text></view> */}
					</view>
				</view>
			</div>
		);
	}
}

ChartHighstock.propTypes = {
	data: PropTypes.array,
  title: PropTypes.string
};

export default ChartHighstock;