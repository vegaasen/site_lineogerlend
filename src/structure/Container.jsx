import * as React from 'react';
import './container.css'

const Container = props => <div className={'container' + (props.gray ? ' bg-gray' : '') + (props.green ? ' bg-green' : '')}>{props.children}</div>;
export default Container