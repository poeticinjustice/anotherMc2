import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import MailchimpContext from '../../context/mailchimp/mailchimpContext';

const Reports = () => {
  const mailchimpContext = useContext(MailchimpContext);

  const {
    loading /* reports, getReports, */,
    specific,
    getSpecific
  } = mailchimpContext;

  useEffect(() => {
    //getReports();
    getSpecific();
    // eslint-disable-next-line
  }, []);

  let getId = function() {
    return specific.id;
  };

  let id = getId();

  let getTitle = function() {
    return specific.campaign_title;
  };

  let title = getTitle();

  /*
  // Does not work pulling JSON from state
  let getBounces = function() {
    return specific.bounces.hard_bounces;
  };

  let bounces = getBounces();
  */

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div>{id}</div>
        <div>{title}</div>
        {/* <div>{bounces}</div> */}
      </div>
    );
  }
};

export default Reports;
