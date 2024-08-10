import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Checkbox from '../components/ui/Checkbox';
import OKSign from '../public/favicon.ico';





export default function GetStarted() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const servicesItems = [
    'Mobile development',
    'UI/UX Design',
    'web development',
    'SEO',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };




  
  return (
    <>
      <Head>
        <title> İletişim - COMPANY NAME BURAYA </title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Bir sorun mu var ?
              </h1>
              <p className='mt-3'>
                Desteğe ihtiyacınız olursa{' '}
                , email adresinden iletişime geçebilirsiniz. En kısa sürede geri dönüş sağlanacaktır.{' '}
                <a
                  href='mailto:support@COMPANY NAME'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'
                >
                  support@company-name.com.
                </a>
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className='space-y-5 font-medium'>
                  <div>
                    <label> Kullanıcı Adı </label>
                    <Input
                      aria-label='Firma Vergi No'
                      type='text'
                      required
                      placeholder='Kullanıcı Adı, örn: Tayfun Kudu'
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>

                  <div>
                    <label> Firma Adı </label>
                    <Input
                      aria-label='Firma Adı'
                      type='text'
                      required
                      placeholder='Firma Adı, örn : COMPANY A.S.'
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>

                  <div>
                    <label>Email</label>
                    <Input
                      aria-label='Email'
                      type='email'
                      required
                      placeholder='e-mail'
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>

                  <div>
                    <label> Firma Vergi No </label>
                    <Input
                      aria-label='Firma Vergi No'
                      type='text'
                      required
                      placeholder='Vergi No, örn: 0000000000'
                      pattern='\d{10}'
                      maxLength='10'
                      minLength='10'
                      title='Vergi numarası 10 haneli olmalıdır'
                      className='mt-2 focus:border-indigo-600'
                    />
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea
                      aria-label='Message'
                      className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                    ></textarea>
                  </div>

                  {/* CHECKBOX ALANI AMA ŞİMDİLİK COMMENT DE DURACAK!
                  <div>
                    <label>Service</label>
                    <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                      {servicesItems.map((item, idx) => (
                        <li key={idx} className='flex gap-x-2 items-center'>
                          <Checkbox id={`service-${idx}`} />
                          <label htmlFor={`service-${idx}`} className='text-sm'>
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  */}

                  <div className='pt-1'>
                    <Button className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring'>
                      Başvur!
                    </Button>
                  </div>
                </form>
              ) : (
                <div className='text-center'>

                  <Image src={OKSign} alt='Başvurunuz Alınmıştır' width={100} height={100} className='tick-animation' />
                  <p className='mt-4 text-xl font-semibold'>Başvurunuz Alınmıştır.</p>
                  <p className='mt-2'>
                    Başvurunuz değerlendirilip onaylandıktan sonra, firma tarafından yetkilendirme ve giriş bilgileriniz eposta adresinize iletilecektir.
                  </p>
                
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
