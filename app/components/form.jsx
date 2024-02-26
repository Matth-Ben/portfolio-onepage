import React from 'react'
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link'

const form = ({data}) => {
    return (
        <div>
          <h1>Contact form</h1>
            <form method="POST">
              <div>
                <label>Name</label>
                <input type="text" name="name" />
              </div>
    
              <div>
                <label>Email</label>
                <input type="text" name="email" />
              </div>
    
              <div>
                <label>Message</label>
                <textarea name="message"></textarea>
              </div>
    
              <button type="submit">Send message</button>
            </form>
        </div>
    )
}
  
export default form