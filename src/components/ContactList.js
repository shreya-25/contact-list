import React from 'react';
import ContactCard from "./ContactCard";
const ContactList = (props) =>
{
        const renderContactList= props.contacts.map((contact) => {
          return(
             <ContactCard contact={contact}> </ContactCard>
          );
        }); 
        return <div classname="ui relaxed divided list"> {renderContactList}</div>
};

export default ContactList;