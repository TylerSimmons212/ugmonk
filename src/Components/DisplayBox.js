import React from 'react';
import {Link} from 'react-router-dom';
import './DisplayBox.css'
export default function DisplayBox() {
 return(
         <div className='display-box'>
                    <div className='outer1'>
                        <div className='inner-text first'>
                            <h1>Clothing</h1>
                            <p>Premium materials + simple designs. Build your wardrobe with every detail considered.</p>
                            <button>Shop Clothing <i className='arrow' className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <img src='https://ugmonk.com/wp-content/uploads/2016/03/category-clothing-1.jpg' alt='clothing-pic'></img>
                    </div>
                    <div className='outer2'>
                        <div className='inner-text second'>
                            <h1>Workspace</h1>
                            <p>Your desk should be more than functional. Make it beautiful with these office essentials.</p>
                            <button>Shop Workspace <i className='arrow' className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <img src='https://ugmonk.com/wp-content/uploads/2016/03/category-workspace-1.jpg' alt='workspace-pic'></img>
                    </div>
                    <div className='outer1'>
                        <div className='inner-text third'>
                            <h1>Everyday Carry</h1>
                            <p>Wallets and bags built to last. Carry your valuables in style.</p>
                            <button>Shop Everyday Carry <i className='arrow' className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <img src='https://ugmonk.com/wp-content/uploads/2016/03/category-accessories-1.jpg' alt='everyday-pic'></img>
                    </div>
                    <div className='outer2'>
                        <div className='inner-text fourth'>
                            <h1>Prints</h1>
                            <p>Life is too short for boring walls. Surround yourself with inspiration.</p>
                            <button>Shop Prints <i className='arrow' className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <img src='https://ugmonk.com/wp-content/uploads/2016/03/category-prints-1.jpg' alt='prints-pic'></img>
                    </div>
                </div> 
 )
}
