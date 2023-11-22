
// import PropTypes from 'prop-types';
import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
// import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    // console.log(category);

    const desserts = menu.filter(item=>item.category === 'dessert');
    const soup = menu.filter(item=>item.category === 'soup');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const drinks = menu.filter(item=>item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>


            <Cover
                img={orderCoverImg}
                title="Order Food"
            ></Cover>

            {/* <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className="tab">Tab 1</a>
                <a role="tab" className="tab tab-active">Tab 2</a>
                <a role="tab" className="tab">Tab 3</a>
            </div> */}
            
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               
               <div className='flex my-4 justify-center'>
               <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
               </div>

              
                <TabPanel>
                    <OrderTab
                    items={salad}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={pizza}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={soup}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={desserts}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                    items={drinks}
                    ></OrderTab>
                </TabPanel>
            </Tabs>



        </div>
    );
};

export default Order;

// Order.propTypes = {
//     item: PropTypes.node
// }