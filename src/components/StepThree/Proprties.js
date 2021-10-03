import React from 'react';
import StepThreeProperty from '../publishingSteps/StepThreeProperty';

const Proprties = ({ setProprties, proprties }) => {


    return (
        <div className="stepthree-properties">
            <h5>מאייפני הכנס</h5>
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={"מיזוג"} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'ממ"ד'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'מחסן'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'דלתות פנדור'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'ריהוט'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'גישה לנכים'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'מעלית'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'מזגן תדיראן'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'משופצת'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'סורגים'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'לשותפים'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'חיות מחמד'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'מטבח כשר'} />
            <StepThreeProperty setProprties={setProprties} proprties={proprties} header={'דוד שמש'} />
        </div>
    );
};

export default Proprties;