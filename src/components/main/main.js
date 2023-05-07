import Education from '../education/education'
import Expirience from '../expirience/expirience'
import Top from '../top/top'
import './main.css'
function Main() {
    return(
        <main className='main'>
            <Top/>
            <Expirience/>
            <Education/>
        </main>
        
    )
}
export default Main