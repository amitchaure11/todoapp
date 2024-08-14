import React from "react";
import { Button } from "react-bootstrap";

interface QuestionFormProps {
  questions: string[];
  onResponse: (response: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  questions,
  onResponse,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <Button
            variant="primary"
            className="primary"
            type="button"
            onClick={() => onResponse(true)}
          >
            Yes
          </Button>
          <Button
            variant="secondary"
            className="secondary"
            type="button"
            onClick={() => onResponse(false)}
          >
            No
          </Button>
        </div>
      ))}
      <Button variant="success" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default QuestionForm;
