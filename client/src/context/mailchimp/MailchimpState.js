import React, { useReducer } from 'react';
import axios from 'axios';
import MailchimpContext from './mailchimpContext';
import MailchimpReducer from './mailchimpReducer';
import {
  GET_REPORTS,
  GET_REPORT,
  GET_CAMPAIGN,
  GET_CLICKED,
  SET_LOADING,
  REPORTS_ERROR
} from '../types';

const MailchimpState = props => {
  const initialState = {
    reports: {},
    campaigns: {},
    report: {},
    campaign: {},
    urlsClicked: {},
    error: null,
    loading: false
  };

  const [state, dispatch] = useReducer(MailchimpReducer, initialState);

  // Set Prod state vs Dev
  // const prodApi = process.env.MC_PROD_API;
  const prodApi = 'https://mailchamp2019.herokuapp.com/api';
  const devApi = 'http://localhost:5000/api';

  const apiLink = process.env.NODE_ENV === 'production' ? prodApi : devApi;

  // Get All Reports
  const getReports = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`${apiLink}/reports`);

      dispatch({
        type: GET_REPORTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was an error'
      });
    }
  };

  // Get Report (specific) ID
  const getReport = async id => {
    setLoading();

    try {
      const res = await axios.get(`${apiLink}/report/${id}`);

      dispatch({
        type: GET_REPORT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was a report error'
      });
    }
  };

  // Get Campaign (specific) ID
  const getCampaign = async id => {
    setLoading();

    try {
      const res = await axios.get(`${apiLink}/campaign/${id}`);

      dispatch({
        type: GET_CAMPAIGN,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was a campaign error'
      });
    }
  };

  const getUrlsClicked = async id => {
    setLoading();

    try {
      const res = await axios.get(`${apiLink}/clicked/${id}`);

      dispatch({
        type: GET_CLICKED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was a clicked error'
      });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MailchimpContext.Provider
      value={{
        reports: state.reports,
        report: state.report,
        campaign: state.campaign,
        urlsClicked: state.urlsClicked,
        loading: state.loading,
        error: state.error,
        getReports,
        getReport,
        getCampaign,
        getUrlsClicked
      }}
    >
      {props.children}
    </MailchimpContext.Provider>
  );
};

export default MailchimpState;
