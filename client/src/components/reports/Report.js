import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

const Report = ({ match }) => {
  const mailchimpContext = useContext(MailchimpContext);
  const {
    getReport,
    getCampaign,
    report,
    campaign,
    loading
  } = mailchimpContext;

  useEffect(() => {
    getReport(match.params.id);
    getCampaign(match.params.id);
    // eslint-disable-next-line
  }, []);

  const { id, subject_line, emails_sent, send_time } = report;
  const { archive_url } = campaign;

  if (loading || !report.clicks) return <Spinner />;

  let clicks_total = report.clicks.clicks_total;
  let click_percent = ((clicks_total / emails_sent) * 100).toFixed(2);
  let unique_opens = report.opens.unique_opens;
  let open_percent = ((unique_opens / emails_sent) * 100).toFixed(2);
  const sendDate = new Date(send_time).toDateString();

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Report List
      </Link>
      <br />
      <br />
      <div>ID: {id}</div>
      <div>
        <a href={archive_url} target='_blank' rel='noopener noreferrer'>
          Link to campaign
        </a>
      </div>
      <div>
        {subject_line} | {sendDate}
      </div>
      <table>
        <tbody>
          <tr>
            <td>Sent:</td>
            <td>{emails_sent}</td>
          </tr>
          <tr>
            <td>Clicks:</td>
            <td>{clicks_total}</td>
            <td>{click_percent}%</td>
          </tr>
          <tr>
            <td>Opens:</td>
            <td>{unique_opens}</td>
            <td>{open_percent}%</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Report;
