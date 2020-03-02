import React, { Component } from 'react';
import AppHeader from './components/AppHeader'
import { Breadcrumb, BreadcrumbItem, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class App extends Component {

  state = {

  }

  _alertFunc() {
    alert("HY")
  }

  render() {
    return (
      <div>
        <AppHeader
          title="JUDUL"
        />
        <Row>
          <div className="col-md-3 side-menu">
            <h1 >LEFT</h1>
          </div>
          <div className="col-md-9">
            <div>
              <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="content">
              <h1 >he href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</h1>
              <div className="content1">
                <div className="content2">
                  <div className="content3">

                  </div>
                </div>
              </div>
            </div>

            <Row className="col-md-12">
              <div className="col-md-4">
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
              </div>
              <div className="col-md-4">
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
              </div>
            </Row>

          </div>
        </Row>
      </div>
    )
  }
}
