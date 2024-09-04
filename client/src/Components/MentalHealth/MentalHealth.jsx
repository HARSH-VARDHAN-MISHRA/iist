import React from 'react';
import './MentalHealth.css';


// Import images
import adhd from '../../Assets/mentalHealth/adhd.jpg';
import antiAging from '../../Assets/mentalHealth/anti-aging.jpg';
import bipolarDisorder from '../../Assets/mentalHealth/bipolar-disorder.jpg';
import dissociativeDisorder from '../../Assets/mentalHealth/dissociative-disorder.jpg';
import stressAnxiety from '../../Assets/mentalHealth/stress-&-anxiety.jpg';
import schizophrenia from '../../Assets/mentalHealth/schizophrenia.jpg';
import depression from '../../Assets/mentalHealth/depression.jpg';
import suicidalThoughts from '../../Assets/mentalHealth/suicidal-thoughts.jpg';
import ocd from '../../Assets/mentalHealth/ocd.jpg';
import personalityDisorder from '../../Assets/mentalHealth/personality-disorder.jpg';
import moodDisorder from '../../Assets/mentalHealth/mood-disorder.jpg';
import ptsd from '../../Assets/mentalHealth/ptsd.jpg';
import parkinsonsDisease from '../../Assets/mentalHealth/parkinson-disease.jpg';
import insomnia from '../../Assets/mentalHealth/insomnia.jpg';
import dementia from '../../Assets/mentalHealth/dementia.jpg';
import substanceAbuse from '../../Assets/mentalHealth/substance-abuse.jpg';
import autism from '../../Assets/mentalHealth/autism.jpg';
import migraine from '../../Assets/mentalHealth/migraine.jpg';


const conditions = [
    { name: 'Stress & Anxiety', image: stressAnxiety },
    { name: 'Schizophrenia Treatment', image: schizophrenia },
    { name: 'Anti-Aging', image: antiAging },
    { name: 'Depression', image: depression },
    { name: 'Bipolar Disorder Treatment', image: bipolarDisorder },
    { name: 'Suicidal Thoughts', image: suicidalThoughts },
    { name: 'ADHD', image: adhd },
    { name: 'OCD', image: ocd },
    { name: 'Personality Disorder', image: personalityDisorder },
    { name: 'Mood Disorder', image: moodDisorder },
    { name: 'PTSD', image: ptsd },
    { name: 'Parkinson\'s Disease', image: parkinsonsDisease },
    { name: 'Insomnia Treatment', image: insomnia },
    { name: 'Dementia', image: dementia },
    { name: 'Substance Abuse', image: substanceAbuse },
    { name: 'Autism', image: autism },
    { name: 'Migraine', image: migraine },
    { name: 'Dissociative Disorder', image: dissociativeDisorder },
];


const MentalHealth = () => {
    return (
        <>
            <section className="container my-5">
                <div className="mental-health-container">
                    {conditions.map((condition, index) => (
                        <div className="card" key={index}>
                            <img
                                src={condition.image}
                                alt={condition.name}
                                className="card-img"
                                loading='lazy'
                            />
                            <div className="card-body">
                                <h5 className="card-title">{condition.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default MentalHealth;
