import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

// for testing
// import axios from 'axios';

const Reports = ({ match }) => {
  const mailchimpContext = useContext(MailchimpContext);

  const {
    loading,
    specific,
    getSpecific,
    reports,
    getReports,
    getCampaigns,
    campaigns
  } = mailchimpContext;

  const { campaign_title, bounces, opens, id } = specific;

  useEffect(() => {
    getSpecific(match.params.specific);
    getReports(match.params.reports);
    getCampaigns(match.params.campaigns);
    // eslint-disable-next-line
  }, []);

  if (loading || !reports.reports || !campaigns.campaigns) return <Spinner />;

  let ids = reports.reports.map(report => {
    return report.id;
  });

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
      <div className='card'>
        {ids.map(idx => {
          return <li key={idx}>{idx}</li>;
        })}
      </div>
      <div className='card'>
        <ul>
          <li>
            {campaign_title && (
              <Fragment>
                <strong>hard_bounces: </strong> {campaign_title}
              </Fragment>
            )}
          </li>

          <li>
            {opens && (
              <Fragment>
                <strong>opens_total: </strong> {opens.opens_total}
              </Fragment>
            )}
          </li>

          <li>
            {bounces && (
              <Fragment>
                <strong>hard_bounces: </strong> {bounces.hard_bounces}
              </Fragment>
            )}
          </li>

          <li>
            <br />
            <strong>Clicks stringified: </strong>
            <p>{JSON.stringify(specific.clicks)}</p>
            <strong>END Clicks stringified: </strong>
          </li>
        </ul>
      </div>
      <div className='card'>{campaigns.campaigns[0].long_archive_url}</div>
      <div className='card'>
        <p>
          <em>destructured</em>
          <br /> {id}
        </p>
        <p>
          <em>specific.subject_line</em>
          <br /> {specific.subject_line}
        </p>
      </div>
    </Fragment>
  );
};

export default Reports;
