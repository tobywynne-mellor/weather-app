// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import { isBoolean } from 'util';

export default class Wind extends Component {

	constructor(props){
		super(props);
	}
    
	render() {
        return (
            <div>
                <p>Wind</p>
            </div>
        );
	}
}