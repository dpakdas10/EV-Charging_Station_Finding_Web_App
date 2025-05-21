import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase-config';
import { doc, setDoc } from 'firebase/firestore';

const AdminSetup = () => {
  const setupAdmin = async () => {
    try {
      // Create admin account
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        'admin@chargeit.com',
        'admin123'
      );

      // Add admin information to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: 'admin@chargeit.com',
        role: 'admin',
        name: 'Admin User',
        joinDate: new Date().toISOString()
      });

      alert('Admin account created successfully!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Admin account already exists. You can login now.');
      } else {
        console.error('Error creating admin:', error);
        alert('Error creating admin account: ' + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Setup</h2>
        <p className="mb-4">Click below to create the admin account:</p>
        <p className="text-sm text-gray-600 mb-4">
          Email: admin@chargeit.com<br />
          Password: admin123
        </p>
        <button
          onClick={setupAdmin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Admin Account
        </button>
      </div>
    </div>
  );
};

export default AdminSetup; 