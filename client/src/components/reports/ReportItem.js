import React from 'react';
import PropTypes from 'prop-types';

const ReportItem = ({ report }) => {
  return (
    <div className='card'>
      <h3>{report.reports.id}</h3>
    </div>
  );
};

ReportItem.propTypes = {
  report: PropTypes.object.isRequired
};

export default ReportItem;
