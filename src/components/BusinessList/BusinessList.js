import React from "react";
import './BusinessList.css'; 
import Business from '../Business/Business'; 

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearched: false // Zustand hinzufügen, um zu verfolgen, ob eine Suche durchgeführt wurde
    };
  }

  componentDidUpdate(prevProps) {
    // Wenn der vorherige Zustand keine Daten hatte und jetzt Daten vorhanden sind, setzen wir isSearched auf true
    if (prevProps.businesses !== this.props.businesses) {
      this.setState({ isSearched: true });
    }
  }

  render() {
    const { businesses } = this.props;
    const { isSearched } = this.state;

    // Wenn isSearched true ist und keine businesses vorhanden sind, zeige die Fehlermeldung an
    if (isSearched && (!businesses || businesses.length === 0)) {
      return <p>No businesses found.</p>;
    }

    return (
      <div className="BusinessList">
        {
          businesses && businesses.map((business) => {
            return <Business business={business} key={business.id} />; 
          })
        }
      </div>
    );
  }
} 

export default BusinessList;

