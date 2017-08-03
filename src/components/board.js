import React from 'react';

import List from './list';
import AddForm from './add-form';

import './board.css';

export default class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [{
                title: 'Example list 1'
            }, {
                title: 'Example list 2'
            }]
        };

        //ensure that the addForm function's this binds to this component
        this.addList = this.addList.bind(this);

    }

    addList(title){
        let lists = [...this.state.lists, {title:title}];
        console.log(lists);
        this.setState({lists: lists});
    }

    render() {
        const lists = this.state.lists.map((list, index) =>
            <List key={index} {...list} />
        );

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}
                    <AddForm type="list" onAdd={this.addList} />
                </div>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};

