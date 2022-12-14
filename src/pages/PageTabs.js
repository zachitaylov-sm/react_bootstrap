import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function PageTabs(props) {
    const [key, setKey] = useState(props.tabs[0].tab);
  
    return (
      <Tabs
        id="page-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
      >      
        {props.tabs.map((page_tab, index) => {
            const { element, tab } = page_tab;
            return <Tab key={`${tab}-${index}`} eventKey={tab} title={tab}> {element} </Tab>;
        })}
      </Tabs>
    );
}
