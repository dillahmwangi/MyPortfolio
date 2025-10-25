import React from 'react'

interface AchievementsProps {
  image: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

const Achievements: React.FC<AchievementsProps> = ({ image, title, description, link, linkLabel, }) => {
    return (
        <div className="max-w-sm bg-white border shadow-sm" style={{ borderWidth: '1px' }}>
          <a href={link}>
          
            <img className="w-full border border-[#DCA465]" src={image} alt={title} />
          </a>
          <div className="p-5">
            <a href={link}>
              <h5 className="mb-2 text-2xl text-gray-900">{title}</h5>
            </a>
            <p className="mb-3 text-left text-[12px] text-gray-700">{description}</p>
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#DCA465] rounded-lg"
            >
              {linkLabel}
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      );
    };

export default Achievements