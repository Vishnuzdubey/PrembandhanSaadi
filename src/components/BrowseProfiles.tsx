import React, { useState } from 'react';
import { Heart, MapPin, Briefcase, Calendar, Filter, Search, Star, Shield } from 'lucide-react';
import { Button } from './ui/button';

interface ProfileCard {
  id: string;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  photo: string;
  verified: boolean;
  premium: boolean;
}

interface BrowseProfilesProps {
  onViewProfile: (profileId: string) => void;
}

// Sample profiles data
const sampleProfiles: ProfileCard[] = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 26,
    location: "Mumbai, Maharashtra",
    profession: "Software Engineer",
    education: "B.Tech Computer Science",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    verified: true,
    premium: true
  },
  {
    id: "2",
    name: "Anita Gupta",
    age: 24,
    location: "Delhi, NCR",
    profession: "Teacher",
    education: "M.A. English",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    verified: true,
    premium: false
  },
  {
    id: "3",
    name: "Kavya Patel",
    age: 28,
    location: "Bangalore, Karnataka",
    profession: "Marketing Manager",
    education: "MBA Marketing",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=600&fit=crop&crop=face",
    verified: false,
    premium: true
  },
  {
    id: "4",
    name: "Sneha Singh",
    age: 25,
    location: "Pune, Maharashtra",
    profession: "Doctor",
    education: "MBBS",
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
    verified: true,
    premium: true
  },
  {
    id: "5",
    name: "Riya Jain",
    age: 27,
    location: "Hyderabad, Telangana",
    profession: "Designer",
    education: "B.Des Fashion",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    verified: true,
    premium: false
  },
  {
    id: "6",
    name: "Pooja Verma",
    age: 23,
    location: "Chennai, Tamil Nadu",
    profession: "Architect",
    education: "B.Arch",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=600&fit=crop&crop=face",
    verified: false,
    premium: false
  }
];

const BrowseProfiles: React.FC<BrowseProfilesProps> = ({ onViewProfile }) => {
  const [profiles] = useState<ProfileCard[]>(sampleProfiles);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleViewProfile = (profileId: string) => {
    onViewProfile(profileId);
  };

  const handleInterest = (profileId: string, profileName: string) => {
    alert(`Interest expressed for ${profileName}!`);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Profiles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your perfect life partner from thousands of verified profiles
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, location, or profession..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-rose-200 text-rose-600 hover:bg-rose-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Age Range</option>
                  <option>21-25</option>
                  <option>26-30</option>
                  <option>31-35</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Religion</option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Sikh</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Education</option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                  <option>Professional</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Profession</option>
                  <option>IT/Software</option>
                  <option>Doctor</option>
                  <option>Engineer</option>
                  <option>Teacher</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500">
                  <option>Location</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Pune</option>
                </select>
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                  Apply
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-rose-600">{filteredProfiles.length}</span> profiles
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Profile Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {profile.verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </div>
                  )}
                  {profile.premium && (
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Premium
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    onClick={() => handleViewProfile(profile.id)}
                    className="mb-4 bg-white text-rose-600 hover:bg-rose-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{profile.name}</h3>
                
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-rose-500" />
                    <span>{profile.age} years</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1 text-rose-500" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-3 w-3 mr-1 text-rose-500" />
                    <span>{profile.profession}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewProfile(profile.id)}
                    className="flex-1 border-rose-200 text-rose-600 hover:bg-rose-50"
                  >
                    View Profile
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleInterest(profile.id, profile.name)}
                    className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700"
                  >
                    <Heart className="h-3 w-3 mr-1" />
                    Interest
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-rose-200 text-rose-600 hover:bg-rose-50 px-8 py-3"
          >
            Load More Profiles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseProfiles;