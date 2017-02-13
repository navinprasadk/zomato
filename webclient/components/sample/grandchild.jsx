import React from 'react';
class grandchild extends React.Component{
  constructor(){
    super();
  }
render(){
  return(
    <div>
        <h1>Hello from Grand child</h1>
    </div>
  );
}
}
module.exports = {
    grandchild
};
