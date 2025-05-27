
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export const ReviewsSection = () => {
  const reviewStats = {
    average: 4.8,
    total: 89,
    breakdown: [
      { stars: 5, count: 67, percentage: 75 },
      { stars: 4, count: 15, percentage: 17 },
      { stars: 3, count: 5, percentage: 6 },
      { stars: 2, count: 1, percentage: 1 },
      { stars: 1, count: 1, percentage: 1 }
    ]
  };

  const reviews = [
    {
      id: 1,
      customerName: 'Emily Johnson',
      petName: 'Buddy',
      rating: 5,
      date: '2024-05-25',
      comment: 'Sarah did an amazing job with Buddy! He came home looking and smelling fantastic. The home visit service was so convenient, and Sarah was very professional and gentle with my anxious dog.',
      response: null
    },
    {
      id: 2,
      customerName: 'Michael Davis',
      petName: 'Luna',
      rating: 5,
      date: '2024-05-23',
      comment: 'Excellent service! Luna always gets nervous at grooming salons, but Sarah made her feel comfortable. The nail trim and bath were done perfectly. Highly recommend!',
      response: 'Thank you so much, Michael! Luna is such a sweetheart, and I\'m glad I could help her feel comfortable. Looking forward to seeing you both again!'
    },
    {
      id: 3,
      customerName: 'Jennifer Smith',
      petName: 'Max',
      rating: 4,
      date: '2024-05-20',
      comment: 'Great grooming service. Max looks wonderful! Only minor issue was the appointment ran a bit late, but the quality of work was excellent.',
      response: null
    },
    {
      id: 4,
      customerName: 'Robert Wilson',
      petName: 'Bella',
      rating: 5,
      date: '2024-05-18',
      comment: 'Best groomer in town! Bella always comes home happy and beautifully groomed. Sarah really knows how to handle different breeds and their specific needs.',
      response: 'Thank you Robert! Bella is always such a joy to work with. I appreciate your continued trust in my services!'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-groomer-primary">Customer Reviews</h2>
        <p className="text-gray-600">View and respond to customer feedback</p>
      </div>

      {/* Review Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-groomer-primary mb-2">{reviewStats.average}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(reviewStats.average))}
            </div>
            <p className="text-gray-600">Based on {reviewStats.total} reviews</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold text-groomer-primary mb-4">Rating Breakdown</h3>
          <div className="space-y-3">
            {reviewStats.breakdown.map((item) => (
              <div key={item.stars} className="flex items-center space-x-3">
                <span className="text-sm w-8">{item.stars}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-groomer-primary h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12">{item.count}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-groomer-primary">Recent Reviews</h3>
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="space-y-4">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-groomer-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{review.customerName[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-groomer-primary">{review.customerName}</p>
                    <p className="text-sm text-gray-600">Pet: {review.petName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex space-x-1 mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>

              {/* Response Section */}
              {review.response ? (
                <div className="bg-groomer-light p-4 rounded-lg border-l-4 border-groomer-primary">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className="bg-groomer-primary text-white">Your Response</Badge>
                  </div>
                  <p className="text-gray-700">{review.response}</p>
                </div>
              ) : (
                <div className="pt-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-groomer-primary border-groomer-primary hover:bg-groomer-light"
                  >
                    Respond to Review
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
