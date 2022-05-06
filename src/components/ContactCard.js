import React from 'react';

const ContactCard = (props) =>{
    const{id, name,email} =props.contact;
  return(
    <div class="ui relaxed divided list">
  <div class="item">
    <i class="large github middle aligned icon"></i>
       <div class="content">
      <a class="header">{name}</a>
      <div class="description">{email}</div>
       </div>
    <i className='trash alternate outline icon' style={{color:"red",marginTop:"10px", marginLeft:"5px", paddingRight:"1200px"}}></i>
    <hr></hr>
  </div>
  </div>
  );
};

export default ContactCard;

