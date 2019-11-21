import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContentEditableInput extends Component {	
    shouldComponentUpdate(nextProps) {
        return nextProps.html !== ReactDOM.findDOMNode(this).innerHTML;
    }
	
    emitChange = () => {
        let html = ReactDOM.findDOMNode(this).innerHTML;
        if (this.props.onBlur && html !== this.lastHtml) {

            this.props.onBlur({
                target: {
					index: this.props.index,
					name: this.props.name,
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
	
	render() {
        return (
			<div 
				index={this.props.index}
				name={this.props.name}
				className={this.props.className}
				data-text={this.props.placeholder}
				//onInput={this.emitChange} 
				onBlur={this.emitChange}
				contentEditable
				dangerouslySetInnerHTML={{__html: this.props.html}}
			>
			</div>
		);
    }
};

export default ContentEditableInput;