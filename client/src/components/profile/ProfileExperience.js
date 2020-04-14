import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='MM/DD/YYYY'>{from}</Moment> -{' '}
      {!to ? 'Present' : <Moment format='MM/DD/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Position:</strong> {title}
    </p>
    <p>
      {description ? (
        <Fragment>
          <strong>Description:</strong> {description}
        </Fragment>
      ) : (
        ''
      )}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
