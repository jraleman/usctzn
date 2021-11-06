import React from 'react';
import RenderSection from './RenderSection';
import uniqueId from '../../utils/helpers/uniqueId';

const Sections = ({ data = [] }) => {
    const title = "Questions and Answers";
    return (
        <div>
            <h2>{title}</h2>
            {data.map(({ title, content }) => (
                <RenderSection
                    key={uniqueId('section_')}
                    title={title}
                    content={content}
                />
            ))}
        </div>
    )
};

export default Sections;
