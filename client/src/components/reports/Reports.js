import React, { useEffect, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

const Reports = () => {
  const mailchimpContext = useContext(MailchimpContext);

  const { loading, reports, getReports } = mailchimpContext;

  useEffect(() => {
    getReports();
    // eslint-disable-next-line
  }, []);

  if (loading || !reports.reports) return <Spinner />;
  return (
    <Fragment>
      <table>
        <caption>The Table</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Campaign Title</th>
            <th>Campaign Subject</th>
            <th>Date/Time</th>
            <th>Total Sent</th>
            <th>Total Clicks</th>
          </tr>
        </thead>
        <tbody>
          {reports.reports.map(report => {
            const sendDate = new Date(report.send_time);
            return (
              <tr>
                <td>{report.id}</td>
                <td>{report.campaign_title}</td>
                <td>{report.subject_line}</td>
                <td>{sendDate.toDateString()}</td>
                <td>{report.emails_sent}</td>
                <td>{report.clicks.clicks_total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

Reports.propTypes = {
  reports: PropTypes.object
};

export default Reports;
