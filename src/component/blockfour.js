import React, { Component } from 'react';

class BlockFour extends Component {

    render() {

        const Message = event => {
            event.preventDefault();
            alert('##### Fonctionnalité à venir #####');
        }

        return (
            <div className="item four">
                <form className="form" action="" method="post">
                    <label name="nom">Votre email :</label><br />
                    <input type="texte" name="nom" placeholder="..." /><br />
                    <label name="demande">Votre demande :</label><br />
                    <textarea placeholder="..."></textarea><br />
                    <p><button 
                        onClick={Message} 
                        type="submit"
                        >
                        submit
                        </button>
                        </p>
                </form>
            </div>
        );
    }

}

export default BlockFour;