import MainHeader from "../../pages/MainHeader"


const Layout = props => {
    return <div>
        <div className='background'></div>
        <MainHeader/>
        <main>
            {props.children}
        </main>
    </div>
}

export default Layout 