"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var Toastr = require('toastr');

var ManageCoursePage = React.createClass({
    
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            course: {id: '', title: '', author: {}, category: '', length: ''}
        };
    },

    componentWillMount: function() {
        var courseId = this.props.params.id;

        if(courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course});
    },

    saveCourse: function(event) {
        event.preventDefault();
        
        if(this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        Toastr.success("Course saved!");
        this.transitionTo('courses');
    },

    render: function() {
        return (
            <div> 
                <CourseForm 
                    course={this.state.course} 
                    onChange={this.setCourseState}
                    onSave={this.saveCourse}/>
            </div>
        );
    }
});

module.exports = ManageCoursePage;