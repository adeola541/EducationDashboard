import React from "react"
import { DatePicker} from 'react-responsive-datepicker';
import 'react-responsive-datepicker/dist/index.css';
import Header from "../components/Header";
const Exam =()=>{
               const [isOpen, setIsOpen] = React.useState(false)
               return(
                              <>
                               <div className="m-2 md:m-10 ml-24 p-2
                               md-p-10 bg-white rounded-3x1 ">
                                             <Header category="App" title="Calendar"/>
                                             <button onClick={() => {
                                                            setIsOpen(true)
                                             }}>
                                                Open            
                                             </button>
                                             <DatePicker 
                                             isOpen={isOpen}
                                             onClose={() => setIsOpen(false)}
                                             defaultValue={new Date(2023, 8, 3)}
                                             minDate={new Date(2023, 10, 10)}
                                             maxDate={new Date(2024, 0, 10)}
                                             headerFormat='DD, MM dd'
                                             />                                            

                                            
                               </div>
                              </>
     )

}
export default Exam;