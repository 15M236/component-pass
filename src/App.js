
import './App.css';
import Component from './Component'

function App() {

  const details = [{name : "Raghavan" , id : 236 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Sabari" , id : 241 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Revanth" , id : 240 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Chandru" , id : 209 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Jithin" , id : 217 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Praveen" , id : 235 , PhoneNumber : 123 , age : 24 } ,
                   {name : "Gokulakannan" , id : 212 , PhoneNumber : 123 , age : 24 } ,]
 
  return (
    <>
     {/* <Button variant="primary" onClick={handleDisplay}>Primary</Button> */}
     <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Phone Number</th>
                  <th>age</th>                          
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Created At</th>
                  <th>Id</th>
                  <th>Phone Number</th>
                  <th>age</th>
                </tr>
              </tfoot>
              <tbody>
                {details.map((data) =>  {
                  return (
                    <Component value={data} key={data.id}/>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
