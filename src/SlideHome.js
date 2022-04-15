import React, { useRef } from "react";
import Slider from "react-slick";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function importAll(data) {
    let images = {};
    data.keys().map((item, index) => { images[item.replace('./assets/img/carousel', '')] = data(item); });
    return images;
  }


function SlideHome(){ 
    const images = importAll(require.context('./assets/img/carousel', false, /\.(png|jpe?g|svg)$/));
    const ref = useRef();
    console.log(images);
      const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
            <Flippy
            className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
            <div className="mx-auto d-block">
            <Flippy
                className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
            <div className="mx-auto d-block">
            <Flippy
                className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
            <div>
            <Flippy
                className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
            <div>
            <Flippy
                className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
            <div>
            <Flippy
                className="mx-auto d-block"
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={ref} // to use toggle method like ref.curret.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide style={{ backgroundColor: '#41669d'}} >
                RICK <br />
                </FrontSide>
                <BackSide style={{ backgroundColor: '#175852'}}>
                ROCKS
                </BackSide>
            </Flippy>
            </div>
          </Slider>
        </div>
      );
    }
    export default SlideHome
