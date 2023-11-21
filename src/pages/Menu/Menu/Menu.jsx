import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <h2 className="text-5xl">Menu</h2>
        </div>
    );
};

export default Menu;