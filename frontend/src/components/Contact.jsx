import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="my-16 text-center text-white">
      <h2 className="my-4 text-4xl font-semibold">Contact</h2>
      <div className="my-4">
        <p>{CONTACT.address}</p>
        <p>{CONTACT.phoneNo}</p>
        <p>{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contact;
