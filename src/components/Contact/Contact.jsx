import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best service for You
                We believe a good place to live can make your life better</span>


                <div className="flexColStart ContactModes">
                    <div className="flexCenter row">
                        <div className="flexColCenter mode">
                            <div className="flexStart detail">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart">
                                    <span className='primaryText'>Call</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        {/* second */}
                        <div className="flexColCenter mode">
                            <div className="flexStart row detail">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart">
                                    <span className='primaryText'>Chat</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                    {/* second */}
                    <div className="flexCenter row">
                        <div className="flexColCenter mode">
                            <div className="flexStart detail">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart">
                                    <span className='primaryText'>Call</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        {/* second */}
                        <div className="flexColCenter mode">
                            <div className="flexStart row detail">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart">
                                    <span className='primaryText'>Chat</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Right */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="Contact Image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
