import axios from 'axios';

const BASE_URL = 'https://64b1588b062767bc4826120d.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const postContact = async newContact => {
  await axios.post(`${BASE_URL}/contacts`, newContact);
};

export const delContact = async contactId => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};