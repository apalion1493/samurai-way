import header from './Header.module.css'

const Header = () => {
    return(
        <header className={header.header}>
            <img width="100"
                 src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/35/d0/72/35d072dc-a6b9-071f-90fc-58666d20e792/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
                 alt=""/>
        </header>
    )
}

export default Header