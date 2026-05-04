import React from 'react'
import Card from './components/Card'
import { HelpCircleIcon } from 'lucide-react';

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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgQW9R_RJ67Vcif_DsI4hgAS-uKBtgrpaGYQ&s",
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
    logo: "data:image/png;base64,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",
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
    logo: "data:image/png;base64,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",
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
    logo: "data:image/png;base64,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",
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
    logo: "data:image/png;base64,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",
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
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
    logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
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
    logo: "https://logowik.com/content/uploads/images/adobe-inc-a878.logowik.com.webp",
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
    logo: "data:image/png;base64,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",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_0h7lxDlOMZFOcl1Ae4CU7uRUxHmGI0IEg&s",
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
    logo: "https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
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
    logo: "https://static.vecteezy.com/system/resources/previews/012/871/376/non_2x/zoom-logo-in-blue-colors-meetings-app-logotype-illustration-free-png.png",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK72M84jyOoaT2cb2QcJv8L1O8TTeMjBUYGA&s",
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
    logo: "https://static.vecteezy.com/system/resources/previews/020/190/501/non_2x/paytm-logo-paytm-icon-free-free-vector.jpg",
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
    logo: "https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg",
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
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLa2X3zXtN8OjQ5uWn7XVJpAj3ZazuOsa4A&s",
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
      <div className='cardsection'>

      {jobs.map(function (element , index) {
        return <Card company={element.company} logo={element.logo} posted={element.posted} title={element.title} tag1={element.tags[0]} tag2={element.tags[1]} salary={element.salary} location={element.location}/>
      })}

      </div>
    </>
  )
}

export default App
