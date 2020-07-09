const HeadText = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 35px;
    letter-spacing: 0.01em;
    color: #121728;
    float: left;
    margin-right: 50px;
`;

const SearchBox = styled.div`

  font-family: Inter;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 35px;
  letter-spacing: 0.01em;
  color: #38476C;
  opacity: 0.75;
  }
 
`;

const Clickbtn = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    letter-spacing: 0.01em;
    text-decoration-line: underline !important;
    color: #005BF2 !important;
    float: right;
`;

const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  background: white;
  ul{
    list-style-type: none;
    text-align: left;
    padding: 0px;
  }
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  `;

  const testdiv = styled.div`
  width: 100%;
  display:flex;
  `;
  
  const FeatureBox = styled.div`
    padding: 15px;
    background: white;
    text-align: left;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    ul{
      list-style-type: none;
      text-align: left;
      padding: 0;
      width: 100%;
      margin-top: 10px;
    }
    li{
      margin-top: 20px;
      display:flex;
      span{
      }
      input{
        float:right;
      }
    }
    .testbox{
      background: #C4C4C4;
      border-radius: 4px;
      margin: 0 auto;
      width: 100%;
      height: 45px;
      padding: 0 20px;
      outline: none;
      border: none !important; 
      opacity: 0.75;
      &:focus{
        transition: 0.35s ease;
      }
      &::placeholder {
          font-family: Inter;
          font-style: italic;
          font-weight: normal;
          font-size: 16px;
          line-height: 35px;
          letter-spacing: 0.01em;
          color: #38476C;
          opacity: 0.75;
        }
  }
  
    `;

    const BtnMobDesk = styled.div`
      display:flex;
      justify-content: center;
      .buttonLeft{
      float: left;
      width: 100px;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      background: #38476C;
      display:flex;
      background-color: none;
      border: none;
      span{
        font-family: 'Inter';
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: white;
        margin: 0 auto;
      }
      }
      .buttonRight{
        float:right;
        width: 100px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        background: #ffffff;
        display:flex;
        background-color: none;
        border: none;
        span{
          font-family: 'Inter';
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 24px;
          letter-spacing: 0.04em;
          color: #38476C;
          margin: 0 auto;
        }
        }
    `
  
     
  class BtnCenter extends React.Component {

    render(){
         return  (
           <BtnMobDesk>
               <button className="buttonLeft" type="button" ><span>mobile</span></button>
               <button className="buttonRight" type="button"><span>web</span></button>
           </BtnMobDesk>

       );
     }
   }

  class SelectFeatures extends React.Component {
   render(){
        return  (
        <LeftContainer  style={{padding: '15px'}}>
          <HeadText>Select Features</HeadText>
  
          <Clickbtn><a href="">Clear All</a></Clickbtn>
        </LeftContainer>
      );
    }
  }

  class YourFeatures extends React.Component {
    render(){
         return  (
         <LeftContainer style={{padding: '15px'}}>
           <HeadText>Your Features</HeadText>
         </LeftContainer>
       );
     }
   }

const CenterContainer = styled.div`
  display:flex;
  flex-direction: column;
  margin:0 auto;
  img{
    margin-top: 20px;
  }
`;
                                   

class FeatureSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',features:[]};
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  allfeatures = [  { name: 'Analytics', time: '0.75 weeks', cost: '$1050'},
  { name: 'Block Users',  time: '0.75 weeks', cost: '$1085'},
  { name: 'Comments', time: '0.75 weeks', cost: '$1050'},
  { name: 'Favourites',  time: '0.375 weeks', cost: '$560'},
  { name: 'Invite Friends', time: '0.75 weeks', cost: '$1050'},
  { name: 'Location', time: '0.75 weeks', cost: '$1050'},
  { name: 'Notifications', time: '1.125 weeks', cost: '$1400'},
  { name: 'Photo Library', time: '1.125 weeks', cost: '$1400'}]

  componentDidMount() {
    this.setState({features: this.allfeatures})
  }

  handleChange =  (event) => {

     this.setState({value: event.target.value}, this.searchString);
   
  }

//   handleClick =  () => {

//     const test = value;
  
//  }

  searchString = () => {
    if (this.state.value !== "") {
      var searchString = '';
      searchString = this.state.value.trim().toLowerCase();
    //  debugger;
      let features = [...this.state.features]
      console.log(searchString);
      features = this.allfeatures.filter(function(l) {
       return l.name.toLowerCase().match( searchString );
     });
     this.setState({
       features
     })
     console.log(features);
     }
  }

  render() 
  {
    return (
      <FeatureBox>
         
        <input className="testbox" type="text" placeholder="Search Features" value={this.state.value}
          onChange={this.handleChange} />
          
        <ul>
        {this.state.features.map(function(l,index){
          return  <li key={l.name + index}>
                    <span>
                      {l.name} <br></br>
                      {l.time}<br></br>
                      {l.cost}<br></br>
                    </span>
                    <input type="checkbox" id={`${l.name}`} value={`${l.name}`} />            
                  </li>
        }) }
      </ul>

      </FeatureBox>
    );
  }}
      
  class App extends React.Component {
      render() 
      {
        return (
          
          <div className="container maincontainer">
          <div className="row">
           <div className="col-md-3">  
           <div className="row">

            <SelectFeatures>
  
            </SelectFeatures>
            </div>
            <div className="row">
            <FeatureSearch style={{padding: '15px'}}></FeatureSearch>
            </div>
            </div>
            <div className="col-md-6">  
            <div className="row">
              <CenterContainer>
              <BtnCenter></BtnCenter>
              
              <img src="./images/mobileDesign.png" className="img-fluid" 
              id="imgDesk" alt="Responsive image"/>
              {/* <img src="" className="img-fluid" alt="Responsive image" id="imgMob"/> */}

              </CenterContainer>
            </div>
            <div className="row">
              
            </div>
            </div>
            <div className="col-md-3">  
            <YourFeatures>
  
            </YourFeatures>
            </div>
</div>
 </div>
  
        );
      }
    }
  
  const Container = styled.div`
    text-align: center;
    width: 100%;
    background-color: #E5E5E5 !important;
  `;

ReactDOM.render(<App />, document.getElementById("test"));
