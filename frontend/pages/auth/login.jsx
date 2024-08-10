import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { EyeIcon, EyeSlashIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Head>
        <title>Giriş - COMPANY NAME BURAYA</title>
      </Head>
      <div className="relative flex items-center justify-center h-[800px] bg-gray-100">
        <Link href="/" legacyBehavior>
          <a className="absolute top-12 left-12 flex items-center text-gray-700 hover:text-yellow-900">
            <ArrowLeftIcon className="h-6 w-6 mr-1" />
            Geri
          </a>
        </Link>
        <div className="bg-white shadow-md rounded-lg p-6 w-96">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Giriş Yap</h1>
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
            <div>
              <label>Şifre</label>
              <div className="relative mt-4">
                <Input
                  aria-label="Password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:border-indigo-900"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="pt-1">
              <Button className="w-full text-white bg-green-500 hover:bg-green-400 active:bg-green-600 ring-offset-2 ring-green-600 focus:ring">
                Giriş Yap
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-400">
              Şifremi Unuttum?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
