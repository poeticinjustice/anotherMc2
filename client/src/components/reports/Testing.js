import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

const Reports = ({ match }) => {
  const mailchimpContext = useContext(MailchimpContext);

  const {
    loading,
    specific,
    getSpecific,
    reports,
    getReports
  } = mailchimpContext;

  useEffect(() => {
    getSpecific(match.params.specific);
    getReports(match.params.reports);
    // eslint-disable-next-line
  }, []);

  const { campaign_title, bounces, opens } = specific;

  const reportage = reports.reports
    ? reports.reports[0].subject_line
    : 'could not pull subject';

  const reportsForMap = reports.reports
    ? reports.reports
    : 'could not pull subject';

  const reportSubjects = reportsForMap.map(repSub => repSub.subject_line);

  const totes = specific.clicks
    ? specific.clicks.clicks_total
    : 'could not pull total clicks';

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
      <div>
        <br />
        <div className='card'>
          <p>
            These are some stats for specific campaigns nested in multiple
            levels of json. I'm able to get the data, but only after
            destructuring{' '}
          </p>
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
                <Fragment>
                  <br />
                  <strong>Clicks stringified: </strong>
                  <p>{JSON.stringify(specific.clicks)}</p>
                  <strong>END Clicks stringified: </strong>
                  <br />
                  <br />
                </Fragment>
              </li>

              <li></li>
              <li>
                <Fragment>
                  <strong>clicks_total: </strong>
                  {totes}
                </Fragment>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='card'>
        <div>These are the Reports</div>
        <div>
          <div className='card'>subject: {reportage}</div>
          {reportSubjects}
          <div>
            {/* <ul>{reports.map(report => (report = <li> {reportage} </li>))}</ul> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reports;
