import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
export default function FOOTERM() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-center text-white text-lg-start text-muted'>
      <section className='text-center p-4 border-bottom text-white'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us</span>
        </div>

      </section>

      <section className='text-white'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Digital Bazar 
              </h6>
              <p>
                Lorem ipsum dolor sit ipsum dolor sit  ipsum dolor sit ipsum dolor sit ipsum dolor sit ipsum dolor sit ipsum dolor sit
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Mens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kids
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Womens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cart
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                India
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@digitalbazar.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-white p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: {' '}
        <a className='text-reset fw-bold' href='/'>
          Digital Bazar
        </a>
      </div>
    </MDBFooter>
  );
}
