import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-navbox">Description</div>
            <div className="descriptionbox-navbox fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, quas distinctio! Ipsam mollitia ab nemo veniam, modi odit maxime iure quae quidem natus vitae nostrum neque vero molestias dolore consequuntur qui perferendis corporis reprehenderit libero inventore molestiae ex! Explicabo magni eius eos. Provident, iste placeat recusandae eius doloremque atque nesciunt!</p>
        </div>
    </div>
  )
}

export default DescriptionBox