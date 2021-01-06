
import React from  'react';

const ListItem = (props) =>  {
    const {items} = props;
    return (
        <div className="ListItem">
        {items.map(t => <li key={t.id}>{t.name}</li>)}
        </div>
    );
}
export default ListItem;