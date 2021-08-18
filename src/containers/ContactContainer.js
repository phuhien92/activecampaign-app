import React from 'react';
import ContactTable from '../components/Table';
import { fetchContacts } from "../api";
import Loader from '../components/Loader';
import Contact from '../components/contact';
import { ErrorsContext } from '../context';

const ContactContainer = () => {
  const [contacts, setContacts] = React.useState([]);
  const { setError } = React.useContext(ErrorsContext);

  React.useEffect(() => {
    let isCanceled = false;

    (async () => {
      try {
        const contactsResponse = await fetchContacts();
        let contactList = contactsResponse.contacts;

        if (!isCanceled) {
          setContacts(contactList);
        }
      } catch (error) {
        setError(error);
      }
    })();

    return () => isCanceled = true;
  }, [setError]);

  return (contacts.length === 0 ?
    <Loader text="Loading Contact Data ..." /> :
    (
      <ContactTable>
        <ContactTable.THead>
          <tr>
            <th scope="col"><input type="checkbox" className="input-checkbox" /></th>
            <th>Contact Name</th>
            <th>Total Value</th>
            <th>Location</th>
            <th>Deals</th>
            <th>Contact Tags</th>
          </tr>
        </ContactTable.THead>
        <ContactTable.TBody>
          {contacts.length > 0 && (
            contacts.map(c => (
              <Contact key={c.id} contact={c} />
            )))}
        </ContactTable.TBody>
      </ContactTable>
    ))
};

export default ContactContainer;