import { NetflixHeader } from './netflix-header'
import { NetflixSection } from './netflix-section'
import './netflix-index.css'

export function NetflixIndex(){
    return (
        <div className="banner">
            <div className='shed'>
                <NetflixHeader />
                <NetflixSection />
            </div>
        </div>
    )
}