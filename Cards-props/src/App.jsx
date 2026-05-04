import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s",
    posted: "3 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    posted: "30 days ago",
    title: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150-220k",
    location: "Noida, India",
    saved: true
  },
  {
    id: 3,
    company: "Dribbble",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Dribbble_logo.svg",
    posted: "18 days ago",
    title: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India",
    saved: false
  },
  {
    id: 4,
    company: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    posted: "5 days ago",
    title: "UX Designer",
    tags: ["Full-Time", "In Office"],
    salary: "$200-250k",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 5,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    posted: "8 days ago",
    title: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
    saved: false
  },
  {
    id: 6,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    posted: "5 days ago",
    title: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85-120k",
    location: "Kerala, India",
    saved: true
  },
  {
    id: 7,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "2 days ago",
    title: "Product Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$180-240k",
    location: "Hyderabad, India",
    saved: false
  },
  {
    id: 8,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Meta_Logo.svg",
    posted: "12 days ago",
    title: "UI/UX Designer",
    tags: ["Full-Time", "Remote"],
    salary: "$130-190k",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 9,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Adobe_Corporate_Logo.svg",
    posted: "7 days ago",
    title: "Motion UI Designer",
    tags: ["Contract", "Hybrid"],
    salary: "$95/hr",
    location: "Pune, India",
    saved: false
  },
  {
    id: 10,
    company: "Atlassian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Atlassian-logo.svg",
    posted: "4 days ago",
    title: "Senior Product Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$160-230k",
    location: "Mumbai, India",
    saved: false
  },
  {
    id: 11,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    posted: "10 days ago",
    title: "UI Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$110-160k",
    location: "Remote",
    saved: true
  },
  {
    id: 12,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "1 day ago",
    title: "Visual Designer",
    tags: ["Contract", "Remote"],
    salary: "$90/hr",
    location: "Hyderabad, India",
    saved: false
  },
  {
    id: 13,
    company: "Canva",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Canva_Logo.svg",
    posted: "6 days ago",
    title: "Brand Designer",
    tags: ["Full-Time", "In Office"],
    salary: "$75-140k",
    location: "Delhi, India",
    saved: false
  },
  {
    id: 14,
    company: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Stripe_Logo_%28white%29.svg",
    posted: "15 days ago",
    title: "Senior UX Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$170-250k",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 15,
    company: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Zoom_Communications_Logo.svg",
    posted: "9 days ago",
    title: "Interaction Designer",
    tags: ["Part-Time", "Remote"],
    salary: "$80/hr",
    location: "Chennai, India",
    saved: false
  },
  {
    id: 16,
    company: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    posted: "3 days ago",
    title: "Product Designer",
    tags: ["Full-Time", "Hybrid"],
    salary: "$140-200k",
    location: "Mumbai, India",
    saved: true
  },
  {
    id: 17,
    company: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Slack_logo.svg",
    posted: "11 days ago",
    title: "UI/UX Designer",
    tags: ["Full-Time", "Senior Level"],
    salary: "$120-180k",
    location: "Pune, India",
    saved: false
  },
  {
    id: 18,
    company: "Paytm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Paytm_Logo.svg",
    posted: "4 days ago",
    title: "Graphic & UI Designer",
    tags: ["Full-Time", "In Office"],
    salary: "$60-110k",
    location: "Noida, India",
    saved: false
  },
  {
    id: 19,
    company: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Swiggy_logo.svg",
    posted: "2 days ago",
    title: "Senior UI Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$95-150k",
    location: "Bangalore, India",
    saved: true
  },
  {
    id: 20,
    company: "Zomato",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Zomato_Logo.svg",
    posted: "19 days ago",
    title: "Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$70/hr",
    location: "Delhi, India",
    saved: false
  }
];

  return (
    <>
      <Card/>
    </>
  )
}

export default App
