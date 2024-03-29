import React from 'react'
import './style.css'
import image from '../Nestsite Layout/slider-1.png'
import burger from '../Nestsite Layout/burger.png'





function S_Img() {
    return (<>
        <div className='p-5  '>
            <div>
                <img src={image} width={"100%"} className=' main_img ' />
            </div>
            <div className='banner_heading' >
                <h1>Don't miss the amazing grocery deals</h1>
                <br /><h4>Sign up for the daily newaletter</h4>
                <br />
                <div class="Subscribe">
                    <i class="fa-regular fa-paper-plane "></i>
                    <input type="text" name="" id="" class="border-0 Subscribe1" placeholder='Your Email Address' />
                    <button class="border-0 Subscribe2 " >Subscribe</button>
                </div>
            </div>
        </div>
        <div className='d-flex align-items-end gap-4 Categories_name p-3  '>
            <h1>Featured Categories</h1>
            <h6>Cake & Milk</h6>
            <h6>Coffes & Teas</h6>
            <h6 style={{ color: "green" }}>Pet Foods</h6>
            <h6>Vegetables</h6>
        </div>
        <div className='d-flex justify-content-around flex-wrap mt-4'>
            <div className='cart_one' style={{ backgroundColor: '#F2FCE4 ' }}>
                <div>
                    <img src={burger} alt="" width={"85px"} />
                </div>
                <p className='mt-2'> <b>Cake and Milk</b> <br />
                    26 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#fffceb' }}>
                <div>
                    <img src="/Imges/cat-12.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Oganic Kiwi</b> <br />
                    28 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#ecffec' }}>
                <div>
                    <img src="/Imges/cat-11.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Peach</b> <br />
                    14 Items</p>
            </div>

            <div className='cart_one' style={{ backgroundColor: '#feeefe' }}>
                <div>
                    <img src="/Imges/cat-9.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Red Apple</b> <br />
                    54 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#feefea' }}>
                <div>
                    <img src="/Imges/cat-3.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Snake</b> <br />
                    56 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#fff3ff' }}>
                <div>
                    <img src="/Imges/cat-1.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Vegitables</b> <br />
                    72 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#F2FCE4 ' }}>
                <div>
                    <img src="/Imges/cat-2.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'> <b>Strawberry</b> <br />
                    36 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#fffceb' }}>
                <div>
                    <img src="/Imges/cat-4.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Black Plum</b> <br />
                    123 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#ecffec'}}>
                <div>
                    <img src="/Imges/cat-5.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'><b>Custard Apple</b> <br />
                    34 Items</p>
            </div>
            <div className='cart_one' style={{ backgroundColor: '#feeefe' }}>
                <div>
                    <img src="/Imges/cat-14.png" alt="" width={"85px"} />
                </div>
                <p className='mt-2'> <b>Coffee and Tea</b> <br />
                    89 Items</p>
            </div>
        </div>

    </>
    )
}

export default S_Img