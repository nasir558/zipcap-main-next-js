import React from 'react';
import Instructions from '../../components/exam/instructions';

const Index = () => {

  return (
    <Instructions
        submission
        title = "Mid term examination"
        messageTitle = "Exam submitted successfully"
        message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
        btnText = "Continue to course"
        btnLink = "/"
    />
  )
};

export default Index;
