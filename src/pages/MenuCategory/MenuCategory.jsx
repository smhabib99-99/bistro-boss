
import PropTypes from 'prop-types';
import Cover from "../shared/Cover/Cover";
import MenuItem from "../shared/MenuItem/MenuItem";



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
        </div>
    );
};

export default MenuCategory;

MenuCategory.propTypes = {
    items: PropTypes.node,
    title: PropTypes.node,
    img:PropTypes.node
  };