import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './card/Card';



const TabIndex = () => {
    return (
        <div>
              <div>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                   <Card></Card>
                </TabPanel>
            </Tabs>
        </div>
        </div>
    );
};

export default TabIndex;