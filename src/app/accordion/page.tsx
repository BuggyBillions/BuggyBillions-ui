import React from 'react';
import BB_Accordion from '../../components/accordion/Accordion'; // Import BB_Accordion from components
import BB_Button from '../../components/button/Button';

const App: React.FC = () => {
    const accordionItems = [
        {
            id: 'collapseOne',
            title: 'Accordion Item #1',
            content: (
                <p>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                </p>
            ),
        },
        {
            id: 'collapseTwo',
            title: 'Accordion Item #2',
            content: (
                <p>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                </p>
            ),
        },
        {
            id: 'collapseThree',
            title: 'Accordion Item #3',
            content: (
                <><p>
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                 </p><BB_Button label="Click Me" value="Click Me" /></>
            ),
        },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <BB_Accordion items={accordionItems} />
        </div>
    );
};

export default App;
