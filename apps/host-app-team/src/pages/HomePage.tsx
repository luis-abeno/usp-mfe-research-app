import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: "url('https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I')",
        }}
      >
        <div className="container mx-auto mt-[-200px]">
          <div className="bg-black bg-opacity-80 p-8 rounded-lg max-w-lg ml-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Bem-vindo(a) ao Portal de Serviços Acadêmicos da USP!
            </h1>
            <p className="text-lg text-white mb-4">
              Acesse todos os serviços acadêmicos e administrativos da USP de forma
              simples, rápida e intuitiva.
            </p>
            <button
              className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nossas Plataformas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 bg-gray-200 rounded-lg shadow-md border-t border-t-4 border-[#ffc107]"
            >
              <h3 className="text-lg font-semibold mb-4">
                Sistema Júpiter (Graduação)
              </h3>
              <p className="text-gray-700">
                Acesse informações e serviços relacionados à graduação na USP.
              </p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                Sistema Janus (Pós-Graduação)
              </h3>
              <p className="text-gray-700">
                Acesse informações e serviços relacionados à pós-graduação na USP.
              </p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Sistema Marte (Pesquisa)</h3>
              <p className="text-gray-700">
                Plataforma para gerenciamento de projetos de pesquisa na USP.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/1920x400')" }}
        >
          <div
            className="flex items-center justify-center h-full bg-black bg-opacity-50"
          >
            <button
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Acesse Agora
            </button>
          </div>
        </div>
        <div className="py-16 bg-white"></div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-blue-600">200+</h3>
                <p className="text-gray-700">Projetos de Pesquisa</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-600">150+</h3>
                <p className="text-gray-700">Publicações Anuais</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-700">Cursos Oferecidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
