import React from 'react'
import Profile from './profile'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Help() {
  return (
    <>
    <Profile/>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <div className='form text-white'>
        <h4>Help Us</h4>
      <h5>1.Welcome Message</h5>
      <p>Welcome to RapidTow Center! We're here to assist you with any questions or issues you may have.Please explore the options below to find the support you need.</p>

      <h5>2.Frequently Asked Questions(FAQs)</h5>
      <h6>2.1 General Questions</h6>
      <p>1-How do I request a towing services?</p>
      <p>To request a towing service, open the app, enter your current location and destination, and follow the prompts to schedule a tow</p>

      <p>2-How can I track my towing request?</p>
      <p>You can track your towing request in real-time from the "My Requests" section of the app</p>

      <p>3-what payment methods do you accept?</p>
      <p>We accept major credit cards,debit cards and other secure payment methods through app.</p>

      <h6>2.2 account management</h6>
      <p>1-How do I update my account information?</p>
      <p>Go to the 'Account Settings" section in the app to update your to personal information, payment methods, and preferences.</p>

      <p>2-How do I change my password?</p>
      <p>Go to the profile page ..and select change password option and enter old passpord and new password.</p>

      <h6>2.3 technical support</h6>
      <p>1-What should i do if website crashes?</p>
      <p>What should I do if the app crashes? Try restarting the app or your device. If the problem persists,contact our support team for assistance</p>

      <h5>3.Contact Support</h5>
      <p>If you can't fine the answer you're looking for or need further assistance,please reach out to us:</p>
      <p>Email:Support@rapidtow.com</p>
      <p>Phone:(123)456-7890</p>
      
      <h5>4.Live chat</h5>
      <p>For immediate help use our live chat feature available in the app. Our support team is available [insert hours, e.g., 24/7] to assist you.</p>

      <h5>5.FeedBack</h5>
      <p>We value your feedback! If you have any suggestions or comments On how we can improve our service, please let us know through the "Feedback" section in the app</p>

      <h5>6.additional resources</h5>
      <p>Jser Guides: [Link to user guides or tutorials]</p>
      <p>Jpdates and Announcements: [Link to latest updates or news]</p>    
        </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      
    </>
  )
}

export default Help