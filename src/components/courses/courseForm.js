"use strict";

var React = require('react');
var Input = require('../common/textInput');

var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <form>
                <h1>Manage Course</h1>

                <Input
                    name="title"
                    label="Title"
                    onChange={this.props.onChange}
                    value={this.props.course.title}/>

                <Input
                    name="category"
                    label="Category"
                    onChange={this.props.onChange}
                    value={this.props.course.category}/>

                <Input 
                    name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = CourseForm;