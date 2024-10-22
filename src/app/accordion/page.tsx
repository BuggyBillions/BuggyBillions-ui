import React from 'react';
import BB_Accordion from '../../components/accordion/Accordion';
import './customStyles.css'; // Custom styles

const App: React.FC = () => {
    const accordionItems = [
        {
            id: 'item1',
            title: 'Accordion Item #1',
            content: <p>This is the first item's accordion body.</p>,
            headerClassName: 'customHeaderClass', // Apply custom header class
            bodyClassName: 'customBodyClass', // Apply custom body class
        },
        {
            id: 'item2',
            title: 'Accordion Item #2',
            content: <p>This is the second item's accordion body.</p>,
            headerClassName: 'customHeaderClass', // Apply custom header class
            bodyClassName: 'customBodyClass',
        },
        {
            id: 'item3',
            title: 'Accordion Item #3',
            content: <p>This is the third item's accordion body.</p>,
            headerClassName: 'customHeaderClass', // Apply custom header class
            bodyClassName: 'customBodyClass',
        },
    ];

    return (
        <div>
            {/* Pass the accordion items and custom container class */}
            <BB_Accordion items={accordionItems} />
        </div>
    );
};

export default App;
