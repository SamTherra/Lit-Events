import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

function Reviews() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    event: '',
    comment: ''
  });

  const reviews = [
    {
      name: "Sarah Thompson",
      event: "Wedding Reception",
      rating: 5,
      comment: "Absolutely amazing service! The bartenders were professional and the cocktails were perfect. Made our wedding extra special!",
      date: "March 15, 2024"
    },
    {
      name: "Michael Chen",
      event: "Corporate Event",
      rating: 5,
      comment: "Top-notch service and presentation. Our clients were impressed with the signature cocktails and professional staff.",
      date: "March 10, 2024"
    },
    {
      name: "Emily Rodriguez",
      event: "Birthday Party",
      rating: 5,
      comment: "The mobile bar setup was beautiful and the service was impeccable. Would definitely recommend!",
      date: "March 5, 2024"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
    console.log('Review submitted:', reviewForm);
    // Reset form
    setReviewForm({
      name: '',
      email: '',
      rating: 5,
      event: '',
      comment: ''
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gold">Client Reviews</h1>
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-gray-400">(150+ Reviews)</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our clients have to say about their experiences with Lit Events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-black/30 p-6 rounded-lg border border-gold/20 
                hover:border-gold/40 transition-all duration-300"
            >
              <div className="flex text-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.comment}</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-gold text-sm">{review.event}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review Section */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center text-white">Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}
                  className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                    text-white focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={reviewForm.email}
                  onChange={(e) => setReviewForm({...reviewForm, email: e.target.value})}
                  className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                    text-white focus:outline-none focus:border-gold/40 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Event Type
              </label>
              <select
                value={reviewForm.event}
                onChange={(e) => setReviewForm({...reviewForm, event: e.target.value})}
                className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                  text-white focus:outline-none focus:border-gold/40 transition-colors"
                required
              >
                <option value="">Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Birthday">Birthday Party</option>
                <option value="Religious">Religious Celebration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Rating
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setReviewForm({...reviewForm, rating})}
                    className={`p-1 ${reviewForm.rating >= rating ? 'text-gold' : 'text-gray-600'}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Your Review
              </label>
              <textarea
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({...reviewForm, comment: e.target.value})}
                rows={4}
                className="w-full bg-black/50 border border-gray-800 rounded-md px-4 py-2 
                  text-white focus:outline-none focus:border-gold/40 transition-colors"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gold/90 text-black py-3 rounded-md font-medium 
                hover:bg-gold transition-colors duration-300 flex items-center justify-center"
            >
              Submit Review
              <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;