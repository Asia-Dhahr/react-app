import React from "react";
import { Parallax } from "react-parallax"

const image1 = "https://images.unsplash.com/photo-1477696957384-3b1d731c4cff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
const image2 = "https://images.unsplash.com/photo-1589067380343-4e155d7d235d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
const image3 = "https://images.unsplash.com/photo-1579267194805-ff79d8cd12f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
const image4 = "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"

const Website = () => {
    return (
        <div>
            <Parallax bgImage={image1} strength={400}>
                <div id="img1"><div id="boxx">The woods are lovely, dark and deep.</div></div>
            </Parallax>
            <hr />
            <hr />
            <Parallax bgImage={image2} blur={{ min: -3, max: 10 }}>
                <div id="img2"><div id="boox">blure</div></div>
            </Parallax>
            <hr />
            <hr />
            {/* reverse direction  */}
            <Parallax bgImage={image3} strength={-200} >
                <div id="img3"><div id="bbox">luv those colors!</div></div>
            </Parallax>
            <hr />
            <hr />
            <Parallax bgImage={image4} strength={200} renderLayer={precentage => (
                <div style={{
                    position: 'absolute',
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: `rgb(230, 179, 15, ${precentage * 1})`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) scale(${precentage * 5})`
                }}>

                </div>
            )}>
                <div id="img3"><div id="bbox">:)</div></div>
            </Parallax>
            {/* <div style={{ height: '100vh' }}></div> */}
        </div >
    )
}

export default Website;