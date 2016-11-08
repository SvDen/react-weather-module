var React = require('react');

var SearchBar = React.createClass({
    searchHandler() {
        this.props.searchHandler(this.refs.searchField.value);
    },
    render: function() {
        return (
            <section className="weather-search">
                <input className="weather-search-field" type="search" autoComplete="off" placeholder="Search..." ref="searchField"/>
                <button className="weather-search-button" onClick={this.searchHandler}></button>
            </section>
        );
    }
});

module.exports = SearchBar;