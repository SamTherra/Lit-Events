import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  const featuredPost = {
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&h=800&fit=crop&q=100",
    title: "The Art of Craft Cocktails: A Journey Through Flavors",
    excerpt: "Discover the intricate world of craft cocktails and the stories behind their creation...",
    date: "March 15, 2024",
    author: "James Wilson",
    category: "Mixology"
  };

  const posts = [
    {
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop&q=100",
      title: "Essential Spirits for Your Home Bar",
      excerpt: "Learn about the must-have spirits that form the foundation of any great home bar...",
      date: "March 10, 2024",
      author: "Sarah Mitchell",
      category: "Bar Essentials"
    },
    {
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&h=600&fit=crop&q=100",
      title: "Trending Cocktails of 2024",
      excerpt: "Stay ahead of the curve with these innovative cocktail trends taking the world by storm...",
      date: "March 5, 2024",
      author: "Michael Brown",
      category: "Trends"
    },
    {
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&h=600&fit=crop&q=100",
      title: "The Perfect Wedding Bar Guide",
      excerpt: "Everything you need to know about planning and executing the perfect wedding bar service...",
      date: "March 1, 2024",
      author: "Emily Parker",
      category: "Event Planning"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Featured Post */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={featuredPost.image}
          alt={featuredPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <span className="text-gold text-sm font-medium tracking-wider">
                {featuredPost.category.toUpperCase()}
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4">{featuredPost.title}</h1>
              <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {featuredPost.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12">Recent Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-black/30 rounded-lg overflow-hidden border border-gold/20 
                hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-gold text-sm font-medium tracking-wider">
                  {post.category.toUpperCase()}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>
                  </div>
                  <button className="text-gold flex items-center group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;