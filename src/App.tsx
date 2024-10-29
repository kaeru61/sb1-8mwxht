import { useState } from 'react';
import { Header } from './components/Header';
import { ArticleCard } from './components/ArticleCard';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Jobs } from './pages/Jobs';
import { Calendar } from './pages/Calendar';
import { articles } from './data/articles';
import { Article, Page } from './types';

function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('articles');

  const handleArticleClick = (id: string) => {
    const article = articles.find((a) => a.id === id);
    if (article) setSelectedArticle(article);
  };

  const emergencyContacts = [
    { name: 'Emergency Services', number: '911' },
    { name: 'FEMA', number: '1-800-621-3362' },
    { name: 'Red Cross', number: '1-800-733-2767' },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'jobs':
        return <Jobs />;
      case 'calendar':
        return <Calendar />;
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {selectedArticle ? (
              <div className="bg-white rounded-lg shadow-md p-8">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="mb-6 text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  ← Back to articles
                </button>
                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.title}
                  className="w-full h-96 object-cover rounded-lg mb-8"
                />
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={selectedArticle.author.avatar}
                    alt={selectedArticle.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {selectedArticle.author.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedArticle.publishedAt}
                    </p>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedArticle.title}
                </h1>
                <div className="prose max-w-none">
                  <p className="text-gray-600">{selectedArticle.content}</p>
                </div>
              </div>
            ) : (
              <>
                <EmergencyBanner
                  location="Global"
                  emergencyContacts={emergencyContacts}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onClick={handleArticleClick}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>{renderContent()}</main>
    </div>
  );
}

export default App;
