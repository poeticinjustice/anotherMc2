import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

const Reports = () => {
  const mailchimpContext = useContext(MailchimpContext);

  const {
    loading,
    reports,
    getReports,
    specific,
    getSpecific
  } = mailchimpContext;

  useEffect(() => {
    getReports();
    getSpecific();
    // eslint-disable-next-line
  }, []);

  const { id, campaign_title } = specific;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className='card'>
          <p>
            When I loop through the JSON object, I'm able to make it up to two
            levels in, but if I try to go any further, I receive an undefined
            error for the second level. <br />
            Possible solution: <br />
            https://stackoverflow.com/questions/50417895/cant-access-nested-json-objects-in-react
          </p>
          <p>-</p>
          <p>
            <em>destructured</em>
            <br /> {id}
          </p>
          <p>
            <em>destructured</em>
            <br /> {campaign_title}
          </p>
          <p>
            <em>specific.subject_line</em>
            <br /> {specific.subject_line}
          </p>
          <p>-</p>
          <p>
            When I try to get to the hard_bounces key, three levels into the
            object of a specific report <br />
            <em>"specific.bounces.hard_bounces" </em>
            <br />
            It returns: <br />
            <em>TypeError: Cannot read property 'hard_bounces' of undefined</em>
          </p>
        </div>
        <div className='card'>
          <p>
            I used stringify to render the JSON object, reports, from
            http://localhost:5000/api/reports
          </p>
          <p>-</p>
          <p>{JSON.stringify(reports)}</p>
        </div>
      </div>
    );
  }
};

Reports.propTypes = {
  reports: PropTypes.object.isRequired
};

export default Reports;
