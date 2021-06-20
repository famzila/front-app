import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import 'assets/css/timeline.css';
import Badge from 'reactstrap/lib/Badge';

const Timeline = () => {
  const timelineElements = [
    <VerticalTimelineElement
      key="1"
      onTimelineElementClick={() => {
        // eslint-disable-next-line no-alert
        // alert('onTimelineElementClick event fired');
      }}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'orange',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
      contentArrowStyle={{ borderRight: '7px solid  orange' }}
      date="The entry point"
      iconStyle={{
        background: 'orange',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
    >
      <h3 className="vertical-timeline-element-title">Getting started</h3>
      <h4 className="vertical-timeline-element-subtitle">with the Web</h4>
      <p>The roadmap to a web developer career.</p>
      <img
        alt="..."
        width="200px"
        height="200px"
        className="img-center img-fluid"
        src={require('assets/img/ill/ill-2.svg').default}
      />
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key="2"
      className="vertical-timeline-element--work text-center"
      contentStyle={{
        background: 'white',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
      date="Step #1"
      iconStyle={{ background: '#FF5757', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title"> The Web Essentials</h3>
      <Badge className="text-uppercase" color="success" pill>
        Available
      </Badge>
      <a href="/e-books/essentials">
        <img
          alt="..."
          title="Available"
          className="img-center img-fluid"
          src={require('assets/img/books/essentials.png').default}
        />
      </a>
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key="3"
      onTimelineElementClick={() => {
        // eslint-disable-next-line no-alert
        // alert('onTimelineElementClick event fired');
      }}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'white',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
      contentArrowStyle={{ borderRight: '7px solid  white' }}
      date="Step #3"
      iconStyle={{
        background: '#42BA86',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
    >
      <h3 className="vertical-timeline-element-title">Web Basics</h3>
      <Badge className="text-uppercase" color="warning" pill>
        Coming soon
      </Badge>
      {/* <a href="/courses/basics"> */}
      <img
        alt="..."
        title="Coming soon"
        className="img-center img-fluid"
        src={require('assets/img/books/basics.png').default}
      />
      {/* </a> */}
    </VerticalTimelineElement>,
    <VerticalTimelineElement
      key="4"
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'white',
        color: '#fff',
        placeItems: 'center',
        display: 'grid',
      }}
      date="Step #3"
      iconStyle={{ background: '#DB4E80', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">Web Styling</h3>
      <Badge className="text-uppercase" color="warning" pill>
        Coming soon
      </Badge>
      {/* <a href="/courses/styling"> */}
      <img
        alt="..."
        title="Coming soon"
        href="/courses/web-styling"
        className="img-center img-fluid"
        src={require('assets/img/books/styling2.jpg').default}
      />
      {/* </a> */}
    </VerticalTimelineElement>,
  ];

  return (
    <div className="bg-secondary">
      <VerticalTimeline>{timelineElements}</VerticalTimeline>,
    </div>
  );
};

export default Timeline;
