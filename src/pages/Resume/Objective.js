import React from 'react';
import {
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

/**
 * Objective Container
 * 
 * Styling for parent container of component
 */
const objectiveContainer = {
  padding: '20px 0',
  textAlign: 'center',
  margin: '0 auto 5em auto'
};

/**
 * p Style
 * 
 * Styling paragraph (content) within component.
 */
const paragraphStyle = {
  maxWidth: '640px',
  fontSize: '1.5rem',
  margin: 'auto'
};

/**
 * Objective functional Component
 * 
 * Mission Statement as a web developer
 */
export default function () {
  return (
    <Container style={objectiveContainer} fluid>
      <Header as='h2' icon textAlign='center'>
        <Icon name='check square outline' />
        <Header.Content>Objective</Header.Content>
      </Header>
      <Container>
        <p style={paragraphStyle}>
          Deliver detail, persistence, and professional experience to customers while maintaining Agile standards
          and best practices.
        </p>
      </Container>
    </Container>
  );
}
