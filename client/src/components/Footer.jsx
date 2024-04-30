import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram ,BsGithub, BsLinkedin} from 'react-icons/bs'
export default function FooterCom() {

    return (
        <Footer container className='border border-t-8
    border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='m-t-5'>
                        <Link to="/" className='font-bold dark:text-white text-lg sm:text-xl'>
                            <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>Blog Application</span>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.100jsprojects.com'
                            target='blank'
                            rel='noopener noreferrer'>
                                100 Js projects 
                            </Footer.Link>
                            <Footer.Link href='/about'
                            target='blank'
                            rel='noopener noreferrer'>
                               Blogs
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title='Follow '/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.github.com/Anisha-31'
                            target='blank'
                            rel='noopener noreferrer'>
                                 Github
                            </Footer.Link>
                            <Footer.Link href='/about'
                            target='blank'
                            rel='noopener noreferrer'>
                               Linkedin
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://www.100jsprojects.com'
                            target='blank'
                            rel='noopener noreferrer'>
                                100 Js projects 
                            </Footer.Link>
                            <Footer.Link href='/about'
                            target='blank'
                            rel='noopener noreferrer'>
                               Blogs
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        
                        

                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Blog Application" year={new Date().getFullYear()}/>
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook}/>
                        <Footer.Icon href='#' icon={BsInstagram}/>
                        <Footer.Icon href='#' icon={BsLinkedin}/>
                        <Footer.Icon href='#' icon={BsGithub}/>
                        <Footer.Icon href='#' icon={BsFacebook}/>
                    </div>
                </div>

            </div>

        </Footer>
    )
}


