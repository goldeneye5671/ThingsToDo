import React, { useState } from 'react'
import GalleryItem from './GalleryItem'
import GalleryNav from './GalleryNav'

const Gallery = () => {

const [activeItem, setActiveItem] = useState(0)
  const data = [
    {
        id: 1,
        title: "Your Personal Hobby Concierge", 
        content: `Welcome to 'Bliss' – where hobbies become a personalized
            adventure. Elevate yourself by discovering new passions. Our platform
            connects you with businesses, events, and like-minded individuals, 
            ensuring every pursuit is a blissful experience. Start your adventure with us
            today!`
    },
    {
        id: 2,
        title: "Discover Your Bliss, Unleash Your Passion",
        content: `Unlock a world of possibilities! Dive into the realm of hobbies
            and interests that ignite your passion. From making your own lists
            to finding new events and businesses, 'Bliss' is your guide to
            a more fulfilling and exciting life. Explore, connect, and let
            your new bliss lead the way.`
    },
    {
        id: 3,
        title: "Elevate Your Lifestyle with Bliss",
        content: `Transform the way you live with 'Bliss,' your gateway to a 
            world of curated hobbies and personalized experiences. Find your bliss,
            earn merit badges, and connect with businesses that share your passion.
            Immerse yourself in a community of enthusiasts, and let 'Bliss' redefine 
            your lifestyle.`
    },
  ]

    return (
        <div>
            <div className="gallery-content">
                <GalleryItem 
                    title={data[activeItem].title}
                    description={data[activeItem].content}
                />
            </div>
            <GalleryNav 
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                data={data}
            />
        </div>
  )
}

export default Gallery
