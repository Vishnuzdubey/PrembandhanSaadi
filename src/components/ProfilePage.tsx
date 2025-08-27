import React, { useState } from 'react';
import { Heart, MapPin, Briefcase, GraduationCap, Calendar, Phone, Mail, ArrowLeft, Star, MessageCircle, Camera, Shield } from 'lucide-react';
import { Button } from './ui/button';

interface ProfilePageProps {
  profileId: string | null;
  onBack: () => void;
}

interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  height: string;
  religion: string;
  caste: string;
  motherTongue: string;
  maritalStatus: string;
  aboutMe: string;
  interests: string[];
  photos: string[];
  verified: boolean;
  premium: boolean;
}

// Sample profile data - in real app, this would be fetched based on profileId
const sampleProfile: Profile = {
  id: "1",
  name: "Priya Sharma",
  age: 26,
  location: "Mumbai, Maharashtra",
  profession: "Software Engineer",
  education: "B.Tech Computer Science",
  height: "5'4\"",
  religion: "Hindu",
  caste: "Brahmin",
  motherTongue: "Hindi",
  maritalStatus: "Never Married",
  aboutMe: "I am a caring and ambitious person who believes in traditional values while embracing modern thinking. I enjoy reading, traveling, and spending time with family. Looking for a life partner who shares similar values and dreams.",
  interests: ["Reading", "Traveling", "Cooking", "Yoga", "Music"],
  photos: [
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=face"
  ],
  verified: true,
  premium: true
};

const ProfilePage: React.FC<ProfilePageProps> = ({ profileId, onBack }) => {
  const [profile] = useState<Profile>(sampleProfile);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleInterestExpressed = () => {
    alert("Interest expressed successfully! The user will be notified.");
  };

  const handleSendMessage = () => {
    alert("Message feature coming soon!");
  };

  const handleViewContact = () => {
    setShowContactInfo(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-6 border-rose-200 text-rose-600 hover:bg-rose-50"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Profiles
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Photos */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Main Photo */}
              <div className="relative aspect-[3/4] bg-gray-200">
                <img
                  src={profile.photos[activePhotoIndex]}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
                {profile.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </div>
                )}
                {profile.premium && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Premium
                  </div>
                )}
              </div>

              {/* Photo Thumbnails */}
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {profile.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePhotoIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activePhotoIndex === index 
                          ? 'border-rose-500 ring-2 ring-rose-200' 
                          : 'border-gray-200 hover:border-rose-300'
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`${profile.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button 
                onClick={handleInterestExpressed}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg"
              >
                <Heart className="h-4 w-4 mr-2" />
                Express Interest
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSendMessage}
                className="w-full border-rose-200 text-rose-600 hover:bg-rose-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                onClick={handleViewContact}
                className="w-full border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                View Contact Info
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{profile.age} years</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1 text-rose-500" />
                      <span>{profile.profession}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">{profile.aboutMe}</p>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Height</span>
                  <span className="font-medium">{profile.height}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Marital Status</span>
                  <span className="font-medium">{profile.maritalStatus}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Religion</span>
                  <span className="font-medium">{profile.religion}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Caste</span>
                  <span className="font-medium">{profile.caste}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Mother Tongue</span>
                  <span className="font-medium">{profile.motherTongue}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Education</span>
                  <span className="font-medium">{profile.education}</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Interests & Hobbies</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Information Modal */}
            {showContactInfo && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-rose-500" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-rose-500" />
                      <span>priya.sharma@email.com</span>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <Button 
                      onClick={() => setShowContactInfo(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Close
                    </Button>
                    <Button 
                      onClick={() => {
                        navigator.clipboard.writeText("+91 98765 43210");
                        alert("Phone number copied!");
                      }}
                      className="flex-1 bg-rose-500 hover:bg-rose-600"
                    >
                      Copy Phone
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;