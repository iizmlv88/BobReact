import './aside.css'
import { FaMailBulk } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";

function Aside() {
    return(
       <aside className='aside'>
        <div className='avatar'>
            <img src='https://randomuser.me/api/portraits/men/2.jpg' alt='BoB MarleY' className='bob'></img>
        </div>
        <div className='contact_scills'>
            <div className='contact'>
                <div className='SideBig'>Contacts</div>
                <div className='cem'>
                    <div className='contact_block'>
                        <div className='contacts_icon'><FaMobile style={{color: 'rgb(206, 27, 32)'}}/></div>
                        <div><a href='#'>+666666666666</a></div>
                    </div>
                    <div className='email_block'>
                        <div className='email_icon'><FaMailBulk style={{color: 'rgb(206, 27, 32)'}}/></div>
                        <div className='email'><a href='#'>bob_marley@ukr.net</a></div>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='SideBig'><p>Tech Skills</p></div>
                <div>   
                      <ul>
                    <li>HTML5</li>
                    <li>CSS5</li>
                    <li>Posatman</li>
                    <li>Charles</li>
                    <li>Android Studio</li>
                    <li>Jira</li>
                    <li>Git</li>
                </ul>
                    
                </div>
            </div>
            <div>
                <div className='SideBig'>Soft Skills</div>
                <div>
                    <ul>
                    <li>Scrum</li>
                    <li>Agile</li>
                    <li>GTD</li>
                    <li>Teamwork</li>
                </ul>
                </div>
            </div>
        </div>
       </aside>
    )
}
export default Aside