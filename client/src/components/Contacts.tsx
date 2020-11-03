import axios from 'axios'
import React,{ useState, useEffect }  from 'react'
import {Row,Col, Table, Card} from 'react-bootstrap';
import {apiURL,accessHeader} from '../helper/constants';
import AddContacts from './AddContacts';



const Contacts = (props) =>{
   const [contacts,setContacts] = useState<any[]>([]); 
   const [isLoading, setIsLoading] = useState<boolean>(true);

useEffect(() => {
    //console.log(apiURL+'contacts' ,accessHeader)
    axios.get(apiURL+'contacts',accessHeader)
    .then((res)=>{console.log(res); 
        setContacts(res.data);
        setIsLoading(false)
     })
    .catch( err=> console.log(err)
    )
}, [])

    return (<>
        {isLoading && <p>Loading contacts</p>}
        {!isLoading && 
           <Row>
               <Col md={8}>
                   <Row>
                   {contacts.map( (e,i) => { return  (<Col md={3} key={e._id}><Card body  ><h3> {e.name}</h3>
                                    <p>{e.email}</p> <p>{e.list}</p></Card> </Col> )})}
                   </Row>
               
               </Col>
               <Col md={4}>
                   <h3 >Add contacts</h3>
                <AddContacts></AddContacts>
               </Col>
              
           </Row>
        }       
        </>)
    
    

}
export default Contacts