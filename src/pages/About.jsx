import React from 'react'
import EnquiryBanner from '../components/EnquiryBanner'
import "./About.css";

const About = () => {
  return (
    <>
    <div className='about-head mt-5'>
        <h1>Abut Motors Finder Ai</h1>
        <h6 className='mt-1'>About</h6>
        <div className='horzantal'></div>
        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus euismod gravida. Morbi ultrices, quam ac scelerisque cursus, quam risus imperdiet ipsum, ac suscipit urna justo at est. Donec nisl purus, aliquet ut placerat non, tincidunt eu leo. Donec velit est, tempor nec lectus sed, sagittis hendrerit orci. Phasellus sit amet tempus velit. Phasellus ac urna at augue vehicula posuere ac id ex. Pellentesque varius vulputate elit, et tempus ligula tincidunt id. Proin tempus congue imperdiet. Mauris ut euismod purus. Mauris egestas vulputate ante sed imperdiet. In placerat euismod justo.</p>
        <p className='mt-1'>Aenean id dolor semper velit aliquam fermentum at id ex. Mauris placerat felis turpis, sit amet ornare sapien dignissim ut. Etiam ac est orci. Mauris ultricies, massa ac blandit scelerisque, odio diam ornare leo, ac lobortis nisl sapien sit amet erat. Fusce elementum lacinia velit eu fringilla. Suspendisse eu lobortis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
    <EnquiryBanner />
    </>
  )
}

export default About