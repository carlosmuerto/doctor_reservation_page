import PropTypes from 'prop-types';
import BASEURL from '../../redux/URL_API';

function ItemsList(props) {
  const { data } = props;
  return (
    <div className="">
      <p>{data.name}</p>
      <p>{data.specialization}</p>
      <img src={`${BASEURL}${data.photo_dir}`} alt={data.name} className="img_container" />
    </div>
  );
}

ItemsList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    specialization: PropTypes.string,
    photo_dir: PropTypes.string,
  }).isRequired,
};

export default ItemsList;
