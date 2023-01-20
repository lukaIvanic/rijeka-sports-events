import React from 'react'

export const BottomOfThePage = () => {

  return (
    <footer className="bg-light py-3 fixed-bottom">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-4">
                <a href="#" className="text-secondary">Contact Us</a>
            </div>
            <div className="col-12 col-md-4 text-md-center">
                <a href="#" className="text-secondary">Web Tim</a>
            </div>
            <div className="col-12 col-md-4 text-md-right">
                <a href="#" className="text-secondary">About Us</a>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default BottomOfThePage;
