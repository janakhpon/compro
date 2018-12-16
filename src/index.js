import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import FrameSection from './FrameSection';


const App = () => {
    return (
        <div className="ui container comments">

            <FrameSection>
                <h3>It is a bit tricky!</h3>
                <h4>Are u sure ?</h4>
                <ul>
                    <li>haha</li>
                    <li>hehe</li>
                    <li>helhel</li>
                </ul>
            </FrameSection>


            <FrameSection>
                <CommentDetail avator={faker.image.avatar()} author="Aung Myo Myat" date={faker.date.weekday()} text={faker.address.streetAddress()} />
            </FrameSection>

            <FrameSection>
                <CommentDetail avator={faker.image.avatar()} author="Aung Myo Myat" date={faker.date.weekday()} text={faker.address.streetAddress()} />
            </FrameSection>

            <FrameSection>
                <CommentDetail avator={faker.image.avatar()} author="Aung Myo Myat" date={faker.date.weekday()} text={faker.address.streetAddress()} />
            </FrameSection>

            <FrameSection>
                <CommentDetail avator={faker.image.avatar()} author="Aung Myo Myat" date={faker.date.weekday()} text={faker.address.streetAddress()} />
            </FrameSection>


            <FrameSection>
                <h3>It is a bit Obivious!</h3>
                <h4>Are u sure ?</h4>
                <ol>
                    <li>haha</li>
                    <li>hehe</li>
                    <li>helhel</li>
                </ol>
            </FrameSection>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));