import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://fastly.picsum.photos/id/30/3670/2462.jpg?hmac=QmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I')",
        }}
      >
        <div className="container mx-auto mt-[-200px]">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-lg ml-8">
            <h1 className="text-4xl font-bold text-white mb-4">Júpiter</h1>
            <p className="text-lg text-white mb-4">Júpiter About Page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
