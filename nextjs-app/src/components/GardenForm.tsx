/**
 * Login Component
 * @author Lorien Olive
 */

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ApolloConsumer } from 'react-apollo';
import CREATE_GARDEN from '../graphql/garden/mutation/createGarden';

// interface GardenFormState {
//   [key: string]: any;
//   name: string;
//   street_address: string;
// }

export default function GardenForm(props: {
  history: { replace: (arg0: string) => void };
}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (event: any) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else { 
      setAddress(event.target.value);
    }
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
          <input type="submit" value="Submit" className="login-button" />
          <style jsx>
              {`
                form {
                  display: flex;
                  flex-flow: column wrap;
                  justify-content: center;
                  align-items: center;
                  border-left: 1px solid white;
                  padding: 2rem;
                }
                p {
                  color: white;
                  cursor: pointer;
                }
                .garden-input-box {
                  background-color: white;
                  border-radius: 14px 0px 14px 1px;
                  -moz-border-radius: 14px 0px 14px 1px;
                  -webkit-border-radius: 14px 0px 14px 1px;
                  border: 0px solid #000000;
                  box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
                  border: 0;
                  width: 15rem;
                  padding: 0.5rem;
                  height: 2rem;
                  margin-bottom: 2rem;
                  font-family: Candara;
                }
                .garden-button {
                  background-color: white;
                  border-radius: 14px 0px 14px 1px;
                  -moz-border-radius: 14px 0px 14px 1px;
                  -webkit-border-radius: 14px 0px 14px 1px;
                  border: 0px solid #000000;
                  box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
                  width: 15rem;
                  font-size: 0.9rem;
                  padding: 0.5rem;
                  height: 3rem;
                  margin: 2rem;
                  font-family: Candara;
                  transition: transform 0.2s;
                  cursor: pointer;
                }
                .garden-button:hover {
                  transform: scale(1.1);
                  background: #355c7d;
                  background: -webkit-linear-gradient(
                    to right,
                    #c06c84,
                    #6c5b7b,
                    #355c7d
                  );
                  background: linear-gradient(
                    to right,
                    #c06c84,
                    #6c5b7b,
                    #355c7d
                  );
                  color: white;
                }
                @media only screen and (max-width: 740px) {
                  form {
                    border-left: none;
                    border-top: 1px solid white;
                  }
                }
                input:focus {
                  outline: none;
                }
              `}
            </style>
        </form>
      )}
    </ApolloConsumer>
  );
}
