import React, { Component } from 'react';
import { Slider, Card, Carousel } from 'antd';
import '../css/season.css';

const { Meta } = Card;

const marks = {
    0: '1 to 3 Days',
    25: '4 to 6 Days',
    50: '7 to 9 Days',
    75: '10 to 12 Days',
    100: {
        style: {
            color: '#f50',
        },
        label: <strong>More</strong>,
    },
};

class Duration extends Component {
    state = {
        value: 1,
    }

    onChange = (e) => {
        console.log('radio checked area', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        return (
            <div style={{marginLeft: '120px', marginRight: '120px'}}>
                <h4>Duration</h4>
                <Slider marks={marks} step={null} defaultValue={0} />
                <Carousel effect="fade">
                    <div><h3>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                            <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/11/nara-park.jpg" />}
                            >
                                <Meta
                                    title="Nara, Japan"
                                // description="www.instagram.com"
                                />
                            </Card>,
                <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/Switzerland-%C2%A9-Boris-Stroujko-Shutterstock.jpg" />}
                            >
                                <Meta
                                    title="Switzerland"
                                // description="www.instagram.com"
                                />
                            </Card>,
                <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="http://gotravelaz.com/wp-content/uploads/images/Rothenburg_25634.jpg" />}
                            >
                                <Meta
                                    title="Germany"
                                // description="www.instagram.com"
                                />
                            </Card>,
                    <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://s-ec.bstatic.com/images/hotel/max400/166/166379438.jpg" />}
                            >
                                <Meta
                                    title="Finland"
                                // description="www.instagram.com"
                                />
                            </Card>,
                    <Card
                                hoverable
                                style={{ width: 200, height: 190 }}
                                cover={<img alt="example" src="https://s-ec.bstatic.com/images/hotel/max400/166/166379438.jpg" />}
                            >
                                <Meta
                                    title="Finland"
                                // description="www.instagram.com"
                                />
                            </Card>
                        </div>
                    </h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>,
            </div >
        );
    }
}

export default Duration;


