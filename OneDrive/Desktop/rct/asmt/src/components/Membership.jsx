import './Membership.css'

function Membership(){
    return (
        <div className="plans" >
            <div className="plan one" >
                <div className="name">
                    <h1  className='na' >Private Limited Company</h1>
                </div>
                <div className='price'>
                    <h5>Starting</h5>
                    <h1 className='rs'>Rs. 999</h1>
                    <h5 style={{color:"blue"}}> + Govt Fees </h5>
                </div>
                <div className='details' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo dolore, a cumque rem aut explicabo obcaecati aliquid quasi recusandae molestias ex commodi asperiores quos mollitia nobis incidunt natus dignissimos!  </p>
                </div>
                <div className='more' >
                    <h5> <a href="/#">KNOW MORE</a> </h5>
                </div>
            </div>
            <div className="plan two" >
                <div className="name">
                    <h1 className='na' >Limited Liability Partnership</h1>
                </div>
                <div className='price'>
                    <h5>Starting</h5>
                    <h1 className='rs' >Rs. 999</h1>
                    <h5 style={{color:"blue"}}> + Govt Fees </h5>
                </div>
                <div className='details' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo dolore, a cumque rem aut explicabo obcaecati aliquid quasi recusandae molestias ex commodi asperiores quos mollitia nobis incidunt natus dignissimos!</p>
                </div>
                <div className='more' >
                    <h5> <a href="/#">KNOW MORE</a> </h5>
                </div>
                
            </div>
            <div className="plan three" >
                <div className="name">
                    <h1  className='na' >One Person Company</h1>

                </div>
                <div className='price'>
                    <h5>Starting</h5>
                    <h1 className='rs' >Rs. 5998</h1>
                    <h5 style={{color:"blue"}}> + Govt Fees </h5>
                </div>
                <div className='details' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo dolore, a cumque rem aut explicabo obcaecati aliquid quasi recusandae molestias ex commodi asperiores quos mollitia nobis incidunt natus dignissimos!</p>
                </div>
                <div className='more' >
                    <h5> <a href="/#">KNOW MORE</a> </h5>
                </div>
            </div>
            <div className="plan four" >
                <div className="name">
                    <h1  className='na' >Partnership Firm</h1>
                </div>
                <div className='price'>
                    <h5>Starting</h5>
                    <h1 className='rs' >Rs. 999</h1>
                    <h5 style={{color:"blue"}}> + Govt Fees </h5>
                </div>
                <div className='details' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo dolore, a cumque rem aut explicabo obcaecati aliquid quasi recusandae molestias ex commodi asperiores quos mollitia nobis incidunt natus dignissimos!</p>
                </div>
                <div className='more' >
                    <h5> <a href="/#">KNOW MORE</a> </h5>
                </div>
            </div>
        </div>
    );
}

export default Membership;