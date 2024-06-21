// CardSection.js
import React from 'react';
import ServicePageCard from './ServicesPageCard.js';

const CardSection = () => {
  const services = [
    {
      title: 'INFLUENCER MARKETING',
      items: ['Influencer Marketing'],
    },
    {
      title: 'BUSINESS GROWTH CONSULTANCY',
      items: ['Business Growth Consultancy'],
    },
    {
      title: 'BRAND PLACEMENT MANAGEMENT',
      items: ['Strategic Positioning', 'Targeted Placement', 'Brand Management'],
    },
    {
      title: 'IT SOLUTIONS',
      items: ['Software Development', 'Web Design', 'Web Development', 'WordPress', 'Front End Development'],
    },
    {
      title: 'SOCIAL MEDIA MANAGEMENT',
      items: ['Content Creation', 'Community Engagement', 'Platform Optimization', 'Campaign Management'],
    },
    {
      title: 'OTHER SERVICES',
      items: ['YouTube Influencer Marketing', 'Regional Influencer Marketing', 'Celebrities Marketing'],
    },
  ];

  return (
    <div className="bg-lime-100 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServicePageCard key={index} title={service.title} items={service.items} />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
