import Header from '../components/Header';
import HeroSection2 from '../components/HeroSection2';
import Footer from '../components/Footer';
import MostViewedArticlesSection from '../components/MostViewedArticlesSection';
import ArticleListWithSearch from '../components/ArticleListWithSearch';

function Articles() {
  return (
    <div className="relative flex flex-col gap-12 bg-variant-white">
        <Header />
        <HeroSection2 
            Image="/images/articles-page-image.png"
            Titre={<>Articles</>}
            Phrase={`“Knowledge in Action: ESI advances understanding through cutting-edge articles and research.”`}
        />
        <MostViewedArticlesSection className="mt-24"/>
        <ArticleListWithSearch />
        <Footer />
    </div>
  )
}

export default Articles