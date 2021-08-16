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
  }, []);

  return (
    <>
      <ContactTable>
        <ContactTable.THead>
          <tr>
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
      {contacts.length === 0 && <Loader text="Loading Contact Data ..." />}
    </>
  )
};

export default ContactContainer;