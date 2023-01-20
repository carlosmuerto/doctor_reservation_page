import PropTypes from 'prop-types';
import BASEURL from '../../redux/URL_API';

function ItemsList(props) {
  const { data } = props;
  return (

    <>
      <img src={`${BASEURL}${data.photo_dir}`} alt={data.name} className="doctors_img" />
      <p className="doctors_name">{data.name}</p>
      <p className="specialization">
        {data.specialization}
        {' '}
      </p>
    </>

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
