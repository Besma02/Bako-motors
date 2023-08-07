import React from 'react'
import BlogHead from '../components/UI/BlogHead'
import BlogList from '../components/UI/BlogList'
import { Col ,Container,Row} from "reactstrap";
import OurMembers from '../components/UI/OurMember';
const Blog = () => {
  return (
    <>
     <BlogHead/>
     <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="blogtitle">Event & Participation</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="blogtitle2">Our Client </h2>
            </Col>
            <OurMembers/>
          </Row>
        </Container>
        
    </>
  )
}

export default Blog