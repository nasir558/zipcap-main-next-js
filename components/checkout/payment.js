import React, {useState} from 'react'
import Summary from '../common/cartSummary'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SavedCards from './savedCards';
import Skrill from './skrill';

function Payment() {
    const [tabIndex, setTabIndex] = useState(0);
  
    return (
        <div>  
            <div className="block w-full">
                <div className="max-w-1100px mx-auto pl-5 pr-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="paymentMethod">
                                <h1 className="title">Select Payment Method</h1>
                                <div className="customTabs paymentTabs">
                                    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                                        <TabList>
                                            <Tab>Card</Tab>
                                            <Tab>Skrill</Tab>
                                        </TabList>

                                        <TabPanel>
                                           <SavedCards />
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="block w-full Skrill">
                                                <Skrill />
                                            </div>
                                        </TabPanel>
                                   </Tabs>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <Summary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
