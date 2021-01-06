
import React from  'react';
import ListItem from './ListItem';

const HomePage = (props) =>  {
    const {items} = props;
    return (
        <div className="HomePage">
            <h1>Welkom bij de Web3 React Webshop</h1>
            <p>De volgende elementen uit de lessen zijn aanwezig in het project</p>
            <ul>
                <ListItem items= {items}/>
            </ul>
        </div>
    );
}

export default HomePage;