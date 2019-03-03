// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import { isBoolean } from 'util';

export default class swellGraph extends Component {

	constructor(props) {
		super(props);
		this.createWave = this.createWave.bind(this);
	}

	createWave(type) {

		let HEIGHT, FREQUENCE;

		if (type === "primary"){
			HEIGHT = ((this.props.swell.primary.height[this.props.index]-2)/20) * 5;//between 0 and 5
			FREQUENCE = 20 - this.props.swell.primary.period[this.props.index];//between 5 and 25
		} else {
			HEIGHT = ((this.props.swell.secondary.height[this.props.index]-2)/20) * 5;//between 0 and 5
			FREQUENCE = 20 - this.props.swell.secondary.period[this.props.index];//between 5 and 25
		}

		let xs = [];
		for (let i=0; i<=500; i++) {
			xs.push(i);
		}
		let points = xs.map( x => {
			//wave = xHeight + waveHeight * waveFrequence
			let xHeight = (6-HEIGHT)*30;
			let waveHeight = FREQUENCE+10;
			let waveFrequence = Math.sin(x/((25-FREQUENCE)*3));
			let y = xHeight + waveHeight * waveFrequence;

			return [x, y];
		});

		let path = "M" + points.map( p => {
			return p[0] + "," + p[1];
		}).join(" L");

	  return path + " L500,250 L0,250 L0," + points[0][1];
	}

	render() {
		return (
			<div class = {style.cont}>
					{this.props.swell.primary.height[this.props.index] > this.props.swell.secondary.height[this.props.index] ? (
						<svg viewBox = "0 0 500 250" class = { style.swellSvg }>
							<path class={style.swellPathPrimary} d={this.createWave("primary")}></path>
							<path class={style.swellPathSecondary} d={this.createWave("secondary")}></path>
						</svg>
					) : (
						<svg viewBox = "0 0 500 250" class = { style.swellSvg }>
							<path class={style.swellPathSecondary} d={this.createWave("secondary")}></path>							
							<path class={style.swellPathPrimary} d={this.createWave("primary")}></path>
						</svg>
					)}
			</div>
		);
	}
}
