import React, { Component } from 'react';

class BlockTwo extends Component {

    render() {

        return (
            <div className="item two">
            <ul className="item-class">
                <li className="li-margin">
                    <code>
                        <span className="span-orange">class </span>
                        <span className="span-bleu">Developpeur </span>
                        <span className="span-orange">extends </span>
                        <span className="span-bleu">Component </span>
                        &#10100;</code>
                </li>
                <li><code>&nbsp;&nbsp;state<span className="span-orange"> = </span> &#10100;</code></li>
                <li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span className="span-bleu">disponible</span></code></li>
                <li className="li-margin"><code>&nbsp;&nbsp;&#10101;;</code></li>
                <li><code><span className="span-orange">&nbsp;&nbsp;render</span>() &#10100;</code></li>
                <li><code>&nbsp;&nbsp;<span className="span-orange2">&nbsp;&nbsp;return </span>(</code></li>
                <li>
                    <code>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="span-bleu">&nbsp;&nbsp;J'aime relever les défis</span>
                    </code></li>
                <li><code>&nbsp;&nbsp;);</code></li>
                <li><code>&#10101;</code></li>
            </ul>
        </div>
        );
    }
}

export default BlockTwo;