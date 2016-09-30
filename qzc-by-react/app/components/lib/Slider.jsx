import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
  render: function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false
    };
    return (
        <Slider {...settings}>
          <div><img src='http://img.alicdn.com/tps/TB1Y1xiNpXXXXaTapXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp'/></div>
          <div><img src='http://gw.alicdn.com/tps/TB1rAIJNXXXXXbiXXXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp'/></div>
          <div><img src='http://img.alicdn.com/tps/TB1o6AWNXXXXXa2XVXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp'/></div>
        </Slider>
    );
  }
});
