/**
 * Garden Form Component
 * @author Lorien Olive
 */

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ApolloConsumer } from 'react-apollo';
import CREATE_GARDEN from '../../graphql/garden/mutation/createGarden';
import { Link } from 'react-router-dom';
import './styles.scss';

interface GardenFormState {
  [key: string]: any;
  name: string;
  street_address: string;
}

export default function GardenForm(props: {
  history: { replace: (arg0: string) => void };
}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (event: any) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else setName(event.target.value);
  };

  const handleSubmit = async (event: any, client: any) => {
    try {
      event.preventDefault();

      const { data } = await client.query({
        query: CREATE_GARDEN,
        variables: { name: name, streetAddress: address },
      });

      console.log('GARDEN: ', data);
      props.history.replace(`/gardens/${data._id}`);
    } catch (error) {
      toast.error('Not Authenticated');
    }
  };

  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={e => handleSubmit(e, client)} className="garden-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            className="garden-input-box"
            required
          />
          <input
            type="text"
            placeholder="Street Address"
            name="address"
            value={address}
            onChange={handleChange}
            className="garden-input-box"
            required
          />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
      )}
    </ApolloConsumer>
  );
}
