import React, { useReducer } from 'react';
import axios from 'axios';
import MailchimpContext from './mailchimpContext';
import MailchimpReducer from './mailchimpReducer';
import {
  GET_REPORTS,
  GET_CAMPAIGNS,
  SET_LOADING,
  REPORTS_ERROR,
  GET_SPECIFIC
} from '../types';

const MailchimpState = props => {
  const initialState = {
    reports: {},
    campaigns: {},
    specific: {},
    error: null,
    loading: false
  };

  const [state, dispatch] = useReducer(MailchimpReducer, initialState);

  // Get All Reports
  const getReports = async () => {
    setLoading(true);

    try {
      const res = await axios.get('http://localhost:5000/api/reports');

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

  // Get All Campaigns
  const getCampaigns = async () => {
    setLoading();

    try {
      const res = await axios.get('http://localhost:5000/api/campaigns');
      dispatch({
        type: GET_CAMPAIGNS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was an error'
      });
    }
  };

  // Get Specific ID
  const getSpecific = async () => {
    setLoading();

    try {
      const res = await axios.get('http://localhost:5000/api/specific');

      dispatch({
        type: GET_SPECIFIC,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REPORTS_ERROR,
        payload: 'There was an error'
      });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MailchimpContext.Provider
      value={{
        reports: state.reports,
        campaigns: state.campaigns,
        specific: state.specific,
        loading: state.loading,
        error: state.error,
        getReports,
        getCampaigns,
        getSpecific
      }}
    >
      {props.children}
    </MailchimpContext.Provider>
  );
};

export default MailchimpState;
