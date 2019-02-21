// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import { isBoolean } from 'util';
import SwellBoxes from './swellBoxes';
import SwellGraph from './swellGraph';
import Title from '../title';

export default class Swell extends Component {

	constructor(props){
		super(props);
	}
    
	render() {
		return (
            <div class = { style.head }>
                <div class = { style.header }>
                    <Title text = "Swell"/>
                    {/* for tool tip: https://react-bootstrap.github.io/components/overlays/#tooltips */}
                </div>
                {/* {console.log(this.props.swell)} */}
                <SwellBoxes swell = { this.props.swell} index = {this.props.index}/>
                <SwellGraph swell = { this.props.swell} index = {this.props.index}/>
            </div>
		);
	}
}