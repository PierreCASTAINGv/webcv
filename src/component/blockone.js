import React, { Component } from 'react';

class BlockOne extends Component {

    state = {
        data: []
    };

    render() {

        return (
            <div className="item one">
                <ul className="item-portrait">
                    <li><img src="./img/marx.png" alt="portrait de Pierre Castaing" /></li>
                    <li>Hi, I am Pierre Castaing</li>
                    <li className="li-transform">Addict aux technologies du web</li>
                </ul>
            </div>
        );
    }
}

export default BlockOne;