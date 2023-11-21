
import PropTypes from 'prop-types';
import Cover from "../shared/Cover/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';



const MenuCategory = ({items,title, img}) => {
    return (
        <div className="p-10">
            {title && <Cover img={img}title={title}></Cover>}
               <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                    key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline btn-primary mt-5 border-0 border-b-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;

MenuCategory.propTypes = {
    items: PropTypes.node,
    title: PropTypes.node,
    img:PropTypes.node
  };