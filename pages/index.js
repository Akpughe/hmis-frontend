import Head from 'next/head';
import { MainLayout } from '../components/common';
import { Card } from '../components/common';
import { Banner } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>HMIS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="flex flex-col flex-grow">
          <div className="w-full">
            <Banner page="Dashboard" />
          </div>
          <div className="p-8 flex">
            <div className="mr-8">
              <Card figure="100" job="New Patient" />
            </div>
            <div className="mr-8">
              <Card figure="100" job="New Patient" />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
