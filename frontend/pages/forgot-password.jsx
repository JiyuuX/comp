// pages/forgot-password.js
import { useState } from 'react';
import Head from 'next/head';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    // Implement password reset functionality here
  };

  return (
    <>
      <Head>
        <title>Şifremi Unuttum - COMPANY NAME BURAYA</title>
      </Head>
      <div className="flex items-center justify-center h-[600px] bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-96">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Şifremi Unuttum</h1>
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label>Email</label>
              <Input
                aria-label="Email"
                type="email"
                required
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4 focus:border-indigo-900"
              />
            </div>
            <div className="pt-1">
              <Button className="w-full text-white bg-green-500 hover:bg-green-400 active:bg-green-600 ring-offset-2 ring-green-600 focus:ring">
                Şifre Sıfırlama Talep Et
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
