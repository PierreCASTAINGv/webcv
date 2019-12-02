import React, { Component } from 'react';

class BlockThree extends Component {

    render() {

        return (
            <div className="item three">
            <ul className="item-outil">
                <li className="li-title">Mes outils préférés</li>
                <li className="java">JavaScript || PHP</li>
                <li className="react">React || Symfony</li>
                <li className="css">HTML 5 || CSS 3 || Bootstrap</li>
            </ul>
        </div>
        );
    }
}

export default BlockThree;