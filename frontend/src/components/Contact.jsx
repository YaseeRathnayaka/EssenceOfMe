import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="my-16 text-center text-white">
      <h2 className="my-4 text-4xl font-semibold">Contact</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="mb-2 text-xl font-semibold">Address</h3>
          <p>{CONTACT.address}</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="mb-2 text-xl font-semibold">Phone Number</h3>
          <p>{CONTACT.phoneNo}</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="mb-2 text-xl font-semibold">Email</h3>
          <p>{CONTACT.email}</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-400">
          Don't hesitate to contact me whenever you need assistance; I'm just a message away.
        </p>
      </div>
    </div>
  );
};

export default Contact;
